const express = require("express");
const mongoose = require ("mongoose");
const bodyParser = require("body-parser");
const cors = require ("cors");
const dotenv = require ("dotenv");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
// useCreateIndex:true,
useNewUrlParser:true,
// useUnifeidTopology:true,
// useFindAndModify:false
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongodb connection success!");
});

const priceRouter = require ("./routes/foodPrices.js");

app.use("/home", priceRouter);


app.listen(PORT, () => {
    console.log('Surver is up and running on port number: %d',PORT)
});
