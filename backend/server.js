const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRoute = require("./routes/taskRoute");
const app = express();
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [
      "http://localhost:3000/",
      "https://task-manager-apzo-z2c9.onrender.com",
    ],
  })
);
app.use(taskRoute);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
