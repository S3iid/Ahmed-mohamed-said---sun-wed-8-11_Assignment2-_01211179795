"use strict";
const path = require('path');

function buildPath(input){
    
console.log(path.format({
dir: input.dir,
name: input.name,   
ext: input.ext
}))

}
const input = { dir: "/folder", name: "app", ext: ".js" };

buildPath(input)