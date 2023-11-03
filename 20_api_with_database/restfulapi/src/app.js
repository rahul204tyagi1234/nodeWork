// const express =require("express");
// require("./db/connectio")
// // const student = require("./models/student")
// const app =express();
// const port = process.env.PORT || 3000; 

// app.get("/",(req,res)=>{
//     res.send("hello");
// })

// // create a new student
// app.post("/student",(req,res)=>{
//     res.send("hello from the student side .");
// })
// app.listen(port,()=>{
//     console.log(`connection is setup at ${port}`);
// })


const express =require("express");
require("./db/connectio")
const app =express();
const port = process.env.PORT || 3000;

// app.get("/",(req,res)=>{
//     res.send("hello");
// })

// create a new student
app.post("/student",(req,res)=>{
    res.send("hello from the student side .");
})
app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})