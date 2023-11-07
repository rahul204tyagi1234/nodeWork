const { MongoClient, ObjectId } = require("mongodb");
const url = "mongodb://localhost:27017/user-api";
const client = new MongoClient(url, { UseNewUrlparser: true });
async function connectToDb() {
  try {
    await client.connect();
    console.log("you are connected to mongodb");
  } catch (err) {
    console.error("You can not connect to mongodb", err);
  }
}
connectToDb();

const express = require("express");
const app = express();
app.use(express.json());

// Get method
// to tell express that the public folder contain all the assests
app.use(express.static(__dirname + "/public"));

app.set("view engine", "pug");
app.get("/home", function (req, res) {
  res.render("app");
});

app.get("/", async function (req, res) {
  try {
    const database = client.db("user-api");
    const collection = database.collection("userData");
    const data = await collection.find({}).toArray();
    res.json(data);
    console.log("your data is created");
  } catch (err) {
    console.log("can not get data", err);
    res.send("your data is not created");
  }
});

// Post method

app.post("/addData", async function (req, res) {
  try {
    const database = client.db("user-api");
    const collection = database.collection("userData");
    const data = {
      name: req.query.name,
      age: parseInt(req.query.age),
      gender: req.query.gender,
      salary: parseInt(req.query.salary),
    };
    const result = await collection.insertOne(data);
    console.log("your data is inserted done !", result);
    res.json({ result: result });
  } catch (err) {
    console.error("your data is not inserting", err);
  }
});

// Delete method

app.delete("/deleteData/:id", async function (req, res) {
  const database = client.db("user-api");
  const collection = database.collection("userData");
  const idToDelete = req.params.id;
  console.log("your delete id is", idToDelete);
  try {
    const filterValue = { _id: new ObjectId(idToDelete) };
    const result = await collection.deleteOne(filterValue);
    if (result.deletedCount === 1) {
      console.log("your data is deleted id", idToDelete);
      res.send(`your data is deleted id ${idToDelete}`);
    } else {
      console.log("No data");
      res.send("No data");
    }
  } catch (err) {
    console.log("Your data is not deleting");
    res.send("Your data is not deleting");
  }
});

// Update method

app.put("/updateData/:id", async function (req, res) {
  const database = client.db("user-api");
  const collection = database.collection("userData");
  const idToUpdate = req.params.id;
  try {
    const filterValue = { _id: new ObjectId(idToUpdate) };
    const updateResult = {
      $set: { name: "Suraj chuhan", age: 18, gender: "male", salary: 12000 },
    };
    const result = await collection.updateOne(filterValue, updateResult);
    if (result.modifiedCount === 1) {
      console.log("Your data is modified", idToUpdate);
      res.send(`Your data is modified id is ${idToUpdate}`);
    } else {
      console.log("Your data is not found", idToUpdate);
      res.send(`Your data is not found ${idToUpdate}`);
    }
  } catch (err) {
    console.error("Your data is not updating", err);
    res.send("Your data is not updating");
  }
});

// Get by id mrthod

app.get("/get/:id", async function (req, res) {
  const idToGet = req.params.id;
  try {
    const database = client.db("user-api");
    const collection = database.collection("userData");
    const getUser = await collection.findOne({ _id: new ObjectId(idToGet) });
    if (getUser) {
      res.json(getUser);
    } else {
      res.send("Getuser not found");
    }
  } catch (err) {
    console.error("your data is not getting", err);
    res.send("Your data is not getting");
  }
});

app.listen(8000);
