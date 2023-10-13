const fs =require("fs");
fs.writeFile("read.txt","Today is my good day",
(err)=>{
    console.log("file is created");
    console.log(err);

});
fs.appendFile("read.txt"," - but i am not fine",(err)=>{
    console.log("complated work");
})
fs.readFile("read.txt",'UTF-8',(err,data)=>{
    console.log(data);

})