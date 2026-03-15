"use strict"
const path = require("path");

function joinTwoPaths(path1, path2){
    console.log (path.join(path1, path2));
}

console.log(joinTwoPaths("/folder1", "folder2/file.txt"));