const http = require("http");
const user = require('./userApi/data.json')
const fs =require("fs");
// const path = require('path');
// const dataPath = path.join(__dirname, "useApi/data.json");
// console.log(dataPath);
var server = http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url == "/"){
        res.write("<h1> Hello from the home side </h1>");
        res.end();
       
    }else if(req.url == "/about"){
        res.write("<h1> Hello from the about side </h1>");
        res.end();    
    }else if(req.url == "/contact"){
        res.write("<h1> Hello from the contactUs side </h1>");
        res.end();    
    }else if(req.url == "/userapi"){
        fs.readFile(`${__dirname} /userApi`,
        data=>{
            const users = JSON.parse(data);
            // console.log(users);
            // res.end(data); 
        })
        res.write("<h1> Hello from the userApi side </h1>");
        // res.end();    
    } 
    else{
        res.writeHead(404);
        res.write("<h1>404 error page, page is not found </h1>")
        res.end();
        
    }
    // res.write("Hello from the other sides rahul ji");
   
});
server.listen(8000,"localhost",()=>{
    console.log("listing to the port on 8000");
});