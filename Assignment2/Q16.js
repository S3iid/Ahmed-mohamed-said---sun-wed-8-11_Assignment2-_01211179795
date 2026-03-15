"use strict"
const fs = require("fs");

function checkExists(path){
    return fs.existsSync(path);
}

console.log(checkExists("./notes.txt"));