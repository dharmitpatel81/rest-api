const express = require("express");
const path = require("path");
const app = express();
const bodyparser = require("body-parser");
const port = 3000;

// To Parse application/json data and form data
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  // res.send("<h1>Welcome to Home JS</h1>")
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/about", (req, res) => {
  res.send("<h1>Welcome to About JS</h1>");
});

// To read data from db
app.get("/api/data", (req, res) => {
  res.json({
    name: "Dharmit Patel",
    age: 20,
    adress: {
      city: "Ahmedabad",
      state: "Gujarat",
      country: "India",
    },
  });
});

// REST API

app.post("/api/register", async (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;

  // store in mongodb database

  res.json({
    success: true,

    // message: 'Register Successfully',
    // email : email,
    // password : pass
  });

});

// test using thunderclient without creating form
app.post("/api/view", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const money = req.body.money;

  // store in mongodb database

  res.json({
    success: true,
    name,
    age,
    money,
  });
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

// To create API -> used to transfer data on server
// get(read), post(create), put(update), delete(delete)
