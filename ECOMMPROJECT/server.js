// Starting file of the project

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const server_config = require("./configs/server.config");
const db_config = require("./configs/db.config");
const user_model = require("./models/user.model");
const bcrypt = require("bcryptjs");

app.use(express.json());

// Create an admin user at the starting of the application
// if not already present


// Connection with mongodb

mongoose.connect(db_config.DB_URL);
const db = mongoose.connection;

db.on("error", () => {
  console.log("Error while connecting to the MongoDB");
});

db.once("open", () => {
  console.log("Connected to MongoDB");
  init();
});

async function init() {
  try {
    const user = await user_model.findOne({ userId: "admin" });
    console.log("init() is running");

    if (user) {
      console.log("Admin is already present");
      return;
    }
  } catch (error) {
    console.log("Error while reading the data", err);
  }

  try {
    user = await user_model.create({
      name: "Sunny",
      userId: "admin",
      email: "amanmishra942003@gmail.com",
      userType: "ADMIN",
      password: bcrypt.hashSync("Welcome1", 8),
    });

    console.log("Admin user Created");
  } catch (err) {
    console.log("Error while creating admin", err);
  }
}


// Stich the route to the server

require("./routes/auth.routes")(app)


// Start the server

app.listen(server_config.PORT, () => {
  console.log(`Server started at port num : ${server_config.PORT}`);
});
