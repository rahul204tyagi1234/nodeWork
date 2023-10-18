const { Console } = require("console");
const fs = require("fs");
const bioData ={
    names:"Rahul",
    age:18,
    address:"bhagirathpur"
};
// console.log(bioData.address)
// change in the json formate
const jsonData = JSON.stringify(bioData);
fs.writeFile("json1.json",jsonData,(err)=>{
    console.log("done");

})
fs.readFile("json1.json","utf-8",(err,data)=>{
    Console.log(data);
})
// console.log(jsonData);

// change in the object formate
// const objData = JSON.parse(jsonData);
// console.log(objData);