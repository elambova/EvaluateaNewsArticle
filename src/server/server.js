const dotenv = require("dotenv");
dotenv.config();
var path = require("path");

const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
var AYLIENTextAPI = require("aylien_textapi");

const app = express();

//bodyParser middleware
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.static("dist"));

//bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// set api-id and api-key
var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

app.get("/", function (req, res) {
  // for production
  res.sendFile("dist/index.html");

  // for development
  // res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

// post data to sentimentNews
app.post("/sentimentNews", function (req, res, next) {
  const urlHolder = req.body.url;
  textapi.sentiment({ url: urlHolder }, function (error, response) {
    if (error === null) {
      console.log(response);
      res.send(response);
    } else {
      return next(error);
    }
  });
});

// post data to sentimentText
app.post("/sentimentText", function (req, res) {
  const textHolder = req.body.text;
  textapi.sentiment({ text: textHolder, mode: "document" }, function (
    error,
    response
  ) {
    if (error === null) {
      res.send(response);
    } else {
      return next(error);
    }
  });
});
