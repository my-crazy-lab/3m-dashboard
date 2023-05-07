const { connectingLocal, connectingFreeCluster } = require("../../db/connectDatabase.js");

const express = require("express");

const routerUser = express.Router();

routerUser.post("/reset", async (req, res) => {
  try {
    const db = await connectingLocal;

    const users = await db.collection("users").find({}).toArray()

    if (!users.length) {
      await db.collection("users").insertMany(
        [
          { nickname: "Minhem", userCode: 1, createdAt: new Date() },
          { nickname: "Miti", userCode: 2, createdAt: new Date() },
          { nickname: "Tui", userCode: 3, createdAt: new Date() }
        ]);
    }

    res.status(200).send({ message: "Reset user Minhem, Miti, Tui successful" })
  } catch (error) {
    res.status(500).send({ error })
  }
})

routerUser.get("/get", async (req, res) => {
  try {
    const db = await connectingLocal;

    const data = await db.collection("users").find({}).toArray()

    res.status(200).send({ data })
  } catch (error) {
    res.status(500).send({ error })
  }
})

module.exports = routerUser