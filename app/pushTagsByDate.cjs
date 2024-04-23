const { execSync } = require("node:child_process");
const { promisify } = require("node:util");
const exec = promisify(require("node:child_process").exec);

async function fetchTagsWithConflictResolution(localTags) {
    try {
        // Fetch the tags from the remote repository
        await exec("git fetch --tags");
    } catch (error) {
        if (error.message.includes("would clobber existing tag")) {
            console.error("Tag conflict detected. Deleting local tags and retrying...");

            // Delete local tags that conflict with remote tags
            for (const tag of localTags) {
                try {
                    await exec(`git tag -d ${tag}`);
                } catch (deleteError) {
                    console.error(`Failed to delete local tag ${tag}:`, deleteError.message);
                }
            }

            // Retry fetching tags after deleting local tags
            try {
                await exec("git fetch --tags");
                console.log("Successfully fetched tags after resolving conflicts.");
            } catch (retryError) {
                console.error("Failed to fetch tags even after resolving conflicts:", retryError.message);
            }
        } else {
            // Some other error occurred
            console.error("Failed to fetch tags:", error.message);
        }
    }
}

// Get the list of tags sorted by commit date
const localTags = execSync("git tag").toString().trim().split("\n");

fetchTagsWithConflictResolution(localTags).catch(console.error);

// Get the list of tags from the remote repository
const remoteTags = execSync("git ls-remote --tags origin")
    .toString()
    .trim()
    .split("\n")
    .map(tag => tag.split("refs/tags/")[1].trim());

// Find the tags that exist locally but not in the remote repository
const newTags = localTags.filter(tag => !remoteTags.includes(tag));

// Iterate through each new tag and push it to the remote
// biome-ignore lint/complexity/noForEach: <explanation>
newTags.forEach(tag => {
    try {
        execSync(`git push origin ${tag}`);
        console.log(`Pushed tag ${tag} successfully.`);
    } catch (error) {
        console.error(`Failed to push tag ${tag}: ${error}`);
    }
});
