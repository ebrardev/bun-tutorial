const path = require("path");


const filepath = path.join("src", "modules", "index.ts");
const filename = path.basename(filepath);
console.log(filename)