"use strict"
const path = require("path");

function resolvePath(relativePath){
    return path.resolve(relativePath);
}

console.log(resolvePath("./index.js"));