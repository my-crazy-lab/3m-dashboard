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

routerTransaction.get("/get-by-filter-and-pagination", async (req, res) => {
  try {
    const { type, pagination, filter } = req.query

    if (!type) {
      res.status(404).send({ message: "Miss type transaction" });
    }

    const db = await connectingLocal;
    const transactionCollection = db.collection("transactions").find(
      { type },
      {
        createdAt: 1,
        updatedAt: 1,
        type: 1,
        label: {
          value: 1,
          type: 1,
          date: 1,
          description: 1
        }
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

    if (!user) {
      res.status(404).send({ message: "User not found" });
    }

    await db.collection("transactions").insertOne(
      { type, label, createdAt: new Date(), userId: user._id });

    res.status(200).json({ message: "Create new transaction successful" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error })
  }
});

routerTransaction.post("/update", async (req, res) => {
  try {
    console.log(req.body)
    const { type, label, userCode, idTransaction } = req.body;

    if (!idTransaction) {
      res.status(404).send({ message: "Missing key idTransaction" });
    }
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
    if (!user) {
      res.status(404).send({ message: "User not found" });
    }

    const oldTransaction = await db.collection("transactions").findOne({ _id: idTransaction })
    if (oldTransaction.userId !== userCode) {
      res.status(404).send({ message: "User code don't match with this transaction" });
    }

    await db.collection("transactions").updateOne(
      { type, label, updatedAt: new Date() });

    res.status(200).json({ message: "Create new transaction successful" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error })
  }
});

module.exports = routerTransaction;
