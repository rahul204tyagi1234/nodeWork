// condition :- 1

const EventEmitter = require("events");
const event = new EventEmitter();

event.on("getMyName",()=>{
    console.log("your name is rahul");
});
event.emit("getMyName");

// condition :- 2


const EventEmitter = require("events");
const event1 = new EventEmitter();

event1.on("getMyName",()=>{
    console.log("your name is rahul");
});
event1.on("getMyName",()=>{
    console.log("your name is ravi");
});
event1.on("getMyName",()=>{
    console.log("your name is anand");
});
event1.on("getMyName",()=>{
    console.log("your name is ashish");
});

event1.emit("getMyName");

// condition :- 3

const EventEmitter = require("events");
const event2 = new EventEmitter();

event2.on("checkpage",(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event2.emit("checkpage",200,"ok");