"use strict"
const fs = require("fs");

function deleteFile(filePath){
    fs.unlink(filePath, (err) => {
        if(err){
            console.log("Error deleting file");
            return;
        }
        console.log("The file.txt is deleted.");
    });
}
deleteFile("file10.txt")