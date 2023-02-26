const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log("connection Succesfull");
}).catch((err) => console.log("No onnection"));
