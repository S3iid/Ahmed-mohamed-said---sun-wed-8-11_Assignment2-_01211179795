"use strict"    
const path = require('path');


function parsePath(filePath) {
    const result = path.parse(filePath);
    
    console.log({ Name: result.name,Ext: result.ext  });
}

console.log(parsePath("/home/app/main.js"));