// const express = require("express");
// const app = express();
// const port = 8000;

// app.get ("/",(req,res)=>{
//     res.send("Hello from the express server")
// })
// app.listen(port,()=>{
//     console.log(`your code is runing port ${port}`)
// })


const path = require("path")
const express = require("express");
const app = express();
// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))
//builting middleware
const staticPath = path.join(__dirname,'../public')
app.use(express.static(staticPath));
app.get("/",(req,res)=>{
    res.send("Hello how are you");
});
app.get("/about",(req,res)=>{
    res.send("Hello from the about side");
})
app.listen(8000,()=>{
    console.log("Run the code at 8000 server")
})
