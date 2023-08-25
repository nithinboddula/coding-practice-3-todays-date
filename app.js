const express = require("express");

const app = express();

app.get("/", (request, response) => {
  let dateObj = new Date();
  //   console.log(dateObj);
  let dateFormat = `${dateObj.getDate()}-${
    dateObj.getMonth() + 1
  }-${dateObj.getFullYear()}`;
  response.send(dateFormat);
});

module.exports = app;
