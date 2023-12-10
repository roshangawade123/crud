const mongoose = require('mongoose');

const connection = mongoose.connect("mongodb+srv://gawaderoshu765:root@cluster0.04isonw.mongodb.net/test?retryWrites=true&w=majority", 
{ useNewUrlParser: true, useUnifiedTopology: true });

connection.then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

module.exports = connection;
