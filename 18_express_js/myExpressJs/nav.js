// const express = require("express");
// const app =express();
// const port =3000;

// app.get("/",(req,res)=>{
//     res.send("Hello from the home side")
// });
// app.get("/about",(req,res)=>{
//     res.send("<h1>Hello from the about side </h1>")
// });
// app.get("/contact",(req,res)=>{
//     res.status(200).send("Hello from the contact us side")
// });
// app.get("/temp",(req,res)=>{
//     res.send("Hello from the temp side")
// });
// app.listen(port,()=>{
//     console.log(`Your code is runing on port ${port}`);
// });

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from the home side");
});
app.get("/about", (req, res) => {
  res.write("<h1>Hello from the about side </h1>");
  res.write("<h1>Hello from the about side </h1>");
  res.send();
});
app.get("/contact", (req, res) => {
  res.status(200).send("Hello from the contact us side");
});
app.get("/temp", (req, res) => {
  res.send([
    {
      id: 1,
      Name: "Rahul tyagi",
      address: "Bhagirathpur",
    },
     {
      id: 2,
      Name: "Ravi Kumar",
      address: "Jakhaniya",
    },
    {
        id: 3,
        Name: "Anish Maurya",
        address: "Rehati malipur",
      },
  ]);
});
app.listen(port, () => {
  console.log(`Your code is runing on port ${port}`);
});
