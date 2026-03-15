"use strict"
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("start", () => {
    console.log("Welcome event triggered!");
});

emitter.emit("start");