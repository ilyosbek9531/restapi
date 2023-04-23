require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

const app = express();

const PORT = 4000;

app.use(express.json());

const subscribersRoute = require("./routes/subscribers");

app.use("/subscribers", subscribersRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
