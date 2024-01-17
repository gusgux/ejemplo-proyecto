const fs = require("node:fs");


const data = fs.readFileSync("README.md", "utf-8")

const newData = data.replace(/React/ig, "Angular");

fs.writeFileSync("README-angular.md", newData)
console.log(newData);