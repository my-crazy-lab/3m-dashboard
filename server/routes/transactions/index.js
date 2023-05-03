const { connectingLocal, connectingFreeCluster } = require("../../db/connectDatabase.js");

const express = require("express");

const routerTransaction = express.Router();

routerTransaction.delete("/release-memory-free-cluster", async (req, res) => {
  try {
    const db = await connectingFreeCluster;

    await db.collection("transactions").deleteMany();

    res.status(200).send({ message: "Release memory for Free mongo cluster successful" })
  } catch (error) {
    res.status(500).send({ error })
  }
})

routerTransaction.get("/get-by-type", async (req, res) => {
  try {
    const transactionType = req.query.type;

    if (!transactionType) {
      res.status(404).send({ message: "Miss type transaction" });
    }

    const db = await connectingLocal;
    const transactionCollection = db.collection("transactions").find(
      { type: transactionType },
      {
        createdAt: 1,
        label: { value: 1, type: 1 }
      });

    const data = await transactionCollection.toArray();

    res.status(200).send({ data });
  } catch (error) {
    console.log(error);

    res.status(500).send({ error })
  }
});

routerTransaction.post("/create", async (req, res) => {
  try {
    console.log(req.body)
    const { type, label, userCode } = req.body;

    if (!type) {
      res.status(404).send({ message: "Missing key type" });
    }
    if (!label.value) {
      res.status(404).send({ message: "Missing key label.value" });
    }
    if (!label.type) {
      res.status(404).send({ message: "Missing key label.type" });
    }
    if (!userCode) {
      res.status(404).send({ message: "Missing key userCode" });
    }

    const db = await connectingLocal;

    const user = await db.collection("users").findOne({ userCode }, { _id: 1 })

    await db.collection("transactions").insertOne(
      { type, label, createdAt: new Date(), userId: user._id });

    res.status(200).json({ message: "Create new transaction successful" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error })
  }
});

module.exports = routerTransaction;
