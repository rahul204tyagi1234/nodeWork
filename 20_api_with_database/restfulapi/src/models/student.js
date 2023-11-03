const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/student-api";
const client = new MongoClient(url, { useNewUrlparser: true });
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("connect to mongodb");
  } catch (err) {
    console.error("Error connectinting to mongodb", err);
  }
}
connectToDatabase();

const express = require("express");
const app = express();
app.use(express.json());

// app.express('express.json()')
const port = process.env.PORT || 5000;

app.get("/",function(req,res){
  console.log("Hello from the home side");
  res.send("Hello from the home page")
});

// get method

app.get("/create-student",async function(req,res){
  try {
  const database = client.db("student-api");
  const collection = database.collection("add-Data");
  const data = await collection.find({}).toArray();

  res.json(data);
  console.log("show your data",data);
  // res.send("show your data!");
} catch (err) {
  console.error("Your data is not created", err);
  res.send("Your data is not created");
}

})

// Post method

app.post("/student", async (req, res) => {
  const database = client.db("student-api");
  const collection = database.collection("add-Data");
  

  try {
    const data = {
      name: req.query.name,
      age: parseInt(req.query.age),
    };
    console.log("posted data", data);
    const result = await collection.insertOne(data);
    // res.status(200);
    console.log("Inserted the document with Id", result.insertedId);
    res.send("Record inserted successfully!");
    // console.log("Inserted document with IO", result.insertedId);
  } catch (err) {
    console.log("Error inserting data:", err);
  }
});
app.listen(5000);
