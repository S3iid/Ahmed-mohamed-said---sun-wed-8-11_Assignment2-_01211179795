"use strict"
const path = require('path');

function joinSegments(...segments) {
    return path.join(...segments);
}

console.log(joinSegments("src", "components", "App.js"));