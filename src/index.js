const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const multer = require("multer");
const { dbConnection } = require("./database/db");
const userRoutes = require("./route/userRoutes");
require("dotenv").config();
app.use(multer().any());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/accounts", userRoutes);

const url = process.env.URL;

const port = process.env.PORT || 5000;
dbConnection(url);

app.listen(port, () => {
  console.log(`server start on port ${port}`);
});
