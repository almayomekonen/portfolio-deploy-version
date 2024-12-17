const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./router/userRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("mongoose.connected thats dope!!!"))
  .catch((error) => {
    console.log(error.message);
  });

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
