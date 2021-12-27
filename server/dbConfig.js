const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/crud" ;
mongoose.connect(url , { useNewUrlParser: true })

const db = mongoose.connection; 

db.once("open", (_) => {
  console.log("successfully connected", url + process.env.DATABASE);
});

module.exports = mongoose