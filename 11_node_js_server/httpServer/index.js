// const http = require("http");
// const server = http.createServer((req,res)=>{
//     console.log(req.url);
//     res.end("Hello from the other sides rahul ji");
// });
// server.listen(8000,"localhost",()=>{
//     console.log("listing to the port on 8000");
// });

const http = require("http");
const server = http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url == "/"){
        res.end("<h1> Hello from the home side </h1>");
    }else if(req.url == "/about"){
        res.end("Hello from the about side");
    }
    else{
        // res.writeHead(404);
        res.end("<h1>404 error page, page is not found </h1>")
    }
    res.end("Hello from the other sides rahul ji");
});
server.listen(8000,"localhost",()=>{
    console.log("listing to the port on 8000");
});
