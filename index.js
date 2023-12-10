// index.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 3100;
const Item = require('./model/Schema')
const MongoC = require('./config/mongo')

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", require("./routes/user"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
