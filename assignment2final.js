//async.txt
Async save
--------------------------------------------------
//notes.txt
This is a note.

--------------------------------------------------
//Q1
"use strict";
const path = require('path');


function readFile(){
console.log("dir: " + __dirname)
console.log("file: " + __filename)

}

readFile()
--------------------------------------------------
//Q2
"use strict";
const path =require("path");

function readFile(filepath){
console.log("this is the full path --->"+ filepath)
const fullpath =__filename
console.log(path.basename(fullpath))

}

const filepath =__filename
readFile(filepath)
--------------------------------------------------
//Q3
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
--------------------------------------------------
//Q4

"use strict";
      const path = require('path');

function getExtension(filePath) {
    return path.extname(filePath);
}

console.log(getExtension("/docs/readme.md"));
--------------------------------------------------
//Q5
"use strict"    
const path = require('path');


function parsePath(filePath) {
    const result = path.parse(filePath);
    
    console.log({ Name: result.name,Ext: result.ext  });
}

console.log(parsePath("/home/app/main.js"));
--------------------------------------------------
//Q6
"use strict"
const path = require('path');


function isAbsolutePath(filePath) {
    return path.isAbsolute(filePath);
}

console.log(isAbsolutePath("/home/user/file.txt"));
--------------------------------------------------
//Q7
"use strict"
const path = require('path');

function joinSegments(...segments) {
    return path.join(...segments);
}

console.log(joinSegments("src", "components", "App.js"));

--------------------------------------------------
//Q8
"use strict"
const path = require("path");

function resolvePath(relativePath){
    return path.resolve(relativePath);
}

console.log(resolvePath("./index.js"));


--------------------------------------------------
//Q9
"use strict"
const path = require("path");

function joinTwoPaths(path1, path2){
    console.log (path.join(path1, path2));
}

console.log(joinTwoPaths("/folder1", "folder2/file.txt"));

--------------------------------------------------
//Q10
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

--------------------------------------------------
//Q11
"use strict"
const fs = require("fs");

function createFolder(folderName){
    fs.mkdirSync(folderName);
    console.log("Success");
}

createFolder("newFolder");

--------------------------------------------------
//Q12
"use strict"
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("start", () => {
    console.log("Welcome event triggered!");
});

emitter.emit("start");

--------------------------------------------------
//Q13
"use strict"
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("login", (username) => {
    console.log("User logged in:", username);
});

emitter.emit("login", "Ahmed");

--------------------------------------------------
//Q14
"use strict"
const fs = require("fs");

function readFileSyncExample(filePath){
    const data = fs.readFileSync(filePath, "utf8");
    console.log("the file content =>", data);
}

readFileSyncExample("./notes.txt");

--------------------------------------------------
//Q15

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

--------------------------------------------------
//Q16
"use strict"
const fs = require("fs");

function checkExists(path){
    return fs.existsSync(path);
}

console.log(checkExists("./notes.txt"));

--------------------------------------------------
//Q17

"use strict"
const os = require("os");

function getSystemInfo(){
    console.log({
        Platform: os.platform(),
        Arch: os.arch()
    });
}

getSystemInfo();

