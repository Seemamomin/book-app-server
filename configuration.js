const mongoose = require("mongoose");

const connection = mongoose
  .connect("mongodb://127.0.0.1:27017/BookStore")
  .then(
    () => console.info("connected"),
    () => console.info("not connected")
  )
  .catch((error) => console.error(error));

module.exports = (req, res, next) => {
  req.dbConnection = connection;
  next();
};
