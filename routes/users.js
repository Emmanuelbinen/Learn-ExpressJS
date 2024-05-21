// starting by importing express
const express = require("express");
// creating routers with expressJS
const router = express.Router();

// creating routes in expresss
// you can test by entering http://localhost:3000/users
// or enter http://localhost:3000/users/create

/* remember the router works exactly as our app
you can see inthe code below we have replaced app with router
app.get("/users", (req, res) => {
  res.send("User list");
});
app.get("/users/create", (req, res) => {
  res.send("New user form");
}); */
router.get("/", (req, res) => {
  res.send("User list");
});
router.get("/create", (req, res) => {
  res.send("New user form");
});

router.post("/", (req, res) => {
  res.send("Create a user");
});
//We can also dynamically get user by their ids
router.get("/:userID", (req, res) => {
  res.send(`Get user with ID ${req.params.userID}`);
});

module.exports = router;
