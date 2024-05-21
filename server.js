// require the express server we downloaded
const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Here in the console");
  res.render("index", { text: "Homepage" });
});

// creating routes in expresss
// you can test by entering http://localhost:3000/users
// or enter http://localhost:3000/users/create
app.get("/users", (req, res) => {
  res.send("User list");
});
app.get("/users/create", (req, res) => {
  res.send("New user form");
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(3000);
