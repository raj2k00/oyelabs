// "use strict";
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const customerRouter = require("./router/customerRouter");

const app = express();

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to Cloud Database"));
// 1 Customer API

app.use("/api", customerRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server started on port ${port}...`);
});
