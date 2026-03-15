"use strict"
const fs = require("fs");

function readFileSyncExample(filePath){
    const data = fs.readFileSync(filePath, "utf8");
    console.log("the file content =>", data);
}

readFileSyncExample("./notes.txt");