const mongoose = require("mongoose");

const URI = process.env.MONGO_URI || "mongodb://localhost/database";

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Database is connected");
});
