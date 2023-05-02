const connecting = require("../db/conn.js");

const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  const db = await connecting;

  db.collection("temp").find({})
    .toArray().then((a) => {
      console.log(a)

    }).catch(error => console.log(error))

  res.send().status(200);
});

module.exports = router;
