const data = require("./genTPLData.js").default;
const T = require("./genTPLTemplate.js").default;
const ejs = require("ejs");
const fs = require("fs");

for (const i in T.templates) {
    const template = ejs.compile(T.templates[i].template);
    const htmlStr = template(data.nodes);
    const F = `${data.baseRoot}/${T.templates[i].platform}/${T.templates[i].filename}`;
    fs.writeFile(F, htmlStr, err => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.info(`${F} <- ${i}`);
    });
}
