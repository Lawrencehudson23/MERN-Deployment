const mongoose = require("mongoose");

mongoose.connect(
'mongodb://localhost/pirate'
, {

  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("💻 Mongodb Connected"))
  .catch(err => console.error(err));