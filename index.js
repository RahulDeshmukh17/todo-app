const express = require("express");
const todoRoutes = require("./routes/todos");
const dbConnect = require("./config/database");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

//db connection
const dbConenct = require("./config/database");
dbConnect();
app.get("/", (req, res) => {
  res.send(`<h1> This is homepage </h1>`);
});
