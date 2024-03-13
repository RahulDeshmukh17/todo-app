const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Db connection is successful"))
    .catch((error) => {
      console.log("Db connection failure");
      console.error(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
