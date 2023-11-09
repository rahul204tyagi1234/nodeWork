// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/students-api",{
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{
//     console.log("connection is successfull");
// }).catch((err)=>{
//     console.log("no connection");
// })

// const {MongoClient}=require("mongodb");
// const url ='mongodb://localhost:27017/student-api';
// const client = new MongoClient(url,{useNewUrlparser:true});
// async function connectToDatabase(){
//     try{
//         await client.connect();
//         console.log("connect to mongodb");
//     }catch(err){
//         console.error("Error connectinting to mongodb",err);
//     }
// }
// connectToDatabase();
// module.exports=student;