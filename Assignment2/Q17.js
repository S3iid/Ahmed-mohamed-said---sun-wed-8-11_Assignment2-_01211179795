"use strict"
const os = require("os");

function getSystemInfo(){
    console.log({
        Platform: os.platform(),
        Arch: os.arch()
    });
}

getSystemInfo();