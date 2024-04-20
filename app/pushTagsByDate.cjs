const { execSync } = require('node:child_process');


// Get the list of tags sorted by commit date
const localTags = execSync('git tag').toString().trim().split('\n');

// Fetch the tags from the remote repository
execSync('git fetch --tags');

// Get the list of tags from the remote repository
const remoteTags = execSync('git ls-remote --tags origin').toString().trim().split('\n')
  .map(tag => tag.split('refs/tags/')[1].trim());

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
