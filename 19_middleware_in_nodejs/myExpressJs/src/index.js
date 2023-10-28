const express = require("express");
const app = express();
//builting middleware
app.use(express.static());
app.get("/",(req,res)=>{
    res.send("Hello how are you");
});
app.get("/about",(req,res)=>{
    res.send("Hello from the about side");
})
app.listen(3000,()=>{
    console.log("Run the code at 3000 server")
})
