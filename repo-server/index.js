const dotenv = require("dotenv");

dotenv.config();

require("express-async-errors");
const cors = require("cors");

const posts = require("./routes/posts.js");
const express = require("express");

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/posts", posts);

app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
