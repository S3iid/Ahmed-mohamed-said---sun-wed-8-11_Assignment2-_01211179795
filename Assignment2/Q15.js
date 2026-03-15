"use strict"
const fs = require("fs");

function writeAsync(filePath, content){
    fs.writeFile(filePath, content, (err)=>{
        if(err){
            console.log("Error writing file");
            return;
        }
        console.log("File written successfully");
    });
}

writeAsync("./async.txt","Async save");