"use strict";
const path =require("path");

function readFile(filepath){
console.log("this is the full path --->"+ filepath)
const fullpath =__filename
console.log(path.basename(fullpath))

}

const filepath =__filename
readFile(filepath)