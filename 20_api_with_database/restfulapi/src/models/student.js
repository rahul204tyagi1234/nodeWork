const {MongoClient, ObjectId} = require("mongodb");
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
// const port = process.env.PORT || 5000;

app.get("/", function (req, res) {
  console.log("Hello from the home side");
  res.send("Hello from the home page");
});

// get method

app.get("/create-student", async function (req, res) {
  try {
    const database = client.db("student-api");
    const collection = database.collection("add-Data");
    const data = await collection.find({}).toArray();

    res.json(data);
    console.log("show your data");
    // res.send("show your data!");
  } catch (err) {
    console.error("Your data is not created", err);
    res.send("Your data is not created");
  }
});

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

// Delete Method

app.delete("/delete-data/:id", async function(req,res) {
  console.log('inside the delete route')
  const database = client.db("student-api");
  const collection = database.collection("add-Data");
  const idDelete = req.params.id;
  console.log("user id", idDelete);
  try {
    const filter = { _id: new ObjectId(idDelete) };
    console.log("filter in delete route", filter);
    const result = await collection.deleteOne(filter);
    if (result.deletedCount === 1) {
      console.log("Data deleted successfully!");
      res.send(`Data with ID ${idDelete} deleted successfully!`);
    } else {
      console.log(`No data found with ID ${idDelete}`);
      res.status(404).send(`No data found with ID ${idDelete}`);
    }
  } catch (err) {
    console.error("Error deleting data:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Update Method

app.put("/user-update/:id", async function (req, res) {
  const database = client.db("student-api");
    const collection = database.collection("add-Data");

  const idToUpdate = req.params.id;
  console.log("update request id is ", idToUpdate);
  
  const filter = { _id: new ObjectId(idToUpdate) };
  console.log("filter is ", filter);
  try {
    
    const update = { $set: { name: "Ravi kumar", age: 22 } };
    const result = await collection.updateOne(filter, update);
    if (result.modifiedCount === 1) {
      res.status(200).send("User updated successfully");
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    console.error("Error updating data:", error);
    res.status(500).send("Internal Server Error");
  }
});

// //Get by id

app.get("/users/:id", async function (req, res) {
  const idToFind = req.params.id;
  console.log("getById request id is ", idToFind);

  try {
    const database = client.db("student-api");
    const collection = database.collection("add-Data");

    const user = await collection.findOne({ _id: new ObjectId(idToFind) });

    if (user) {
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(5000);
