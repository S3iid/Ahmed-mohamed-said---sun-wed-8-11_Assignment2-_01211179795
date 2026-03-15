"use strict";
      const path = require('path');

function getExtension(filePath) {
    return path.extname(filePath);
}

console.log(getExtension("/docs/readme.md"));