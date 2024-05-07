// os, path

const path = require("path");
const extensionName = path.extname("index.html")
const joinName = path.join(__dirname + '/../views')
console.log(joinName);