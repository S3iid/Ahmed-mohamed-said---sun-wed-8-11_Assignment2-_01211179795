"use strict"
const fs = require("fs");

function createFolder(folderName){
    fs.mkdirSync(folderName);
    console.log("Success");
}

createFolder("newFolder");