// const http = reruire("http");
// const server = http.createServer((req,res)=>{
//     res.end("Hello from the other sides");
// });
// server.listen(3000,"localhost"()=>{
//     console.log("listing to the port on 3000");

// })
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); 