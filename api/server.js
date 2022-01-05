const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const skillsRoute = require("./routes/skills");
const projectRoute = require("./routes/project");

// const path = require('path');
const app = express();

const port = process.env.PORT || 5000;
const url = process.env.URL;

mongoose
  .connect(url)
  .then(() => console.log("db connection successfull"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/skills", skillsRoute);
app.use("/api/projects", projectRoute);

app.get("/", (req, res) => {
  res.send("Server is running..");
});

app.listen(port, () => {
  console.log("Server is running..");
});
