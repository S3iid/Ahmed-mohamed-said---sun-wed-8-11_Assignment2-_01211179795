"use strict"
const path = require('path');


function isAbsolutePath(filePath) {
    return path.isAbsolute(filePath);
}

console.log(isAbsolutePath("/home/user/file.txt"));