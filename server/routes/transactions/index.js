const { connectingLocal, connectingFreeCluster } = require("../../db/connectDatabase.js");
const { ObjectId } = require("mongodb")
const express = require("express");

const routerTransaction = express.Router();

function defineMatchByIsProduction(isProduction) {
  if (isProduction === true || isProduction === "true") return { $match: { isProduction: true } }
  return { $match: {} }
}

routerTransaction.delete("/release-memory-free-cluster", async (req, res) => {
  try {
    const db = await connectingFreeCluster;

    await db.collection("transactions").deleteMany();

    res.status(200).send({ message: "Release memory for Free mongo cluster successful" })
  } catch (error) {
    res.status(500).send({ error })
  }
})

function getParamsPagination(
  pagination,
) {
  const { pageNumber, pageSize } = pagination;

  return {
    skip: pageNumber > 0 ? pageSize * (pageNumber - 1) : 0,
    limit: pageSize,
  };
}

routerTransaction.get("/get-by-filter-and-pagination", async (req, res) => {
  try {
    console.log("🔥 transactions/get-by-filter-and-pagination DEBUGGER ->>> ", req.query)

    const { pagination, filter = {} } = req.query
    console.log(filter)

    if (!pagination.pageNumber || !pagination.pageSize) {
      res.status(404).send({ message: "Missing pageNumber or pageSize" })
    }

    const { skip, limit } = getParamsPagination(pagination)

    const $filter = defineMatchByIsProduction(filter.isProduction)

    if (filter.type) {
      $filter.$match.type = filter.type
    }
    if (filter["label.type"]?.length) {
      $filter.$match["label.type"] = {
        $in: filter["label.type"]
      }
    }

    if (filter.maxValue) {
      $filter.$match["label.value"] = {
        $lte: Number(filter.maxValue)
      }
    }

    if (filter.rangeDate) {
      $filter.$match["label.date"] = {
        $gte: new Date(filter.rangeDate[0]),
        $lte: new Date(filter.rangeDate[1])
      }
    }

    if (filter["search.description"]) {
      $filter.$match["label.description"] = { $regex: filter["search.description"] }
    }

    const db = await connectingLocal;
    const transactionCollection = db.collection("transactions").aggregate(
      [
        {
          $project: {
            createdAt: 1,
            updatedAt: 1,
            type: 1,
            isProduction: 1,
            label: {
              value: 1,
              type: 1,
              date: 1,
              description: 1
            }
          }
        },
        $filter,
        {
          $facet: {
            count: [{ $count: 'total' }],
            data: [
              {
                $sort: {
                  'label.date': -1
                }
              },
              { $skip: Number(skip) },
              { $limit: Number(limit) }
            ],
          }
        }]);

    const data = await transactionCollection.toArray();

    res.status(200).send({
      data: data[0]?.data || [],
      total: data[0]?.count?.[0]?.total || 0
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({ error })
  }
});

routerTransaction.get('/get-total-value-by-filter', async function (req, res) {
  try {
    console.log("🔥 transactions/get-total-value-by-filter DEBUGGER ->>> ", req.query)

    const { filter = {} } = req.query;

    const $filter = defineMatchByIsProduction(filter.isProduction)

    if (filter.rangeDate) {
      $filter.$match["label.date"] = {
        $gte: new Date(filter.rangeDate[0]),
        $lte: new Date(filter.rangeDate[1])
      }
    }

    const db = await connectingLocal;

    const expenditure = db.collection("transactions").aggregate(
      [
        {
          $match: { ...$filter.$match, type: "Expenditure" }
        },
        {
          $group:
          {
            _id: "$label.type",
            total: { $sum: "$label.value" },
          }
        },
      ]);
    const dataExpenditure = await expenditure.toArray();

    const revenue = db.collection("transactions").aggregate(
      [
        {
          $match: { ...$filter.$match, type: "Revenue" }
        },
        {
          $group:
          {
            _id: "$label.type",
            total: { $sum: "$label.value" },
          }
        },
      ]);
    const dataRevenue = await revenue.toArray();

    res.status(200).send({ expenditure: dataExpenditure, revenue: dataRevenue });
  } catch (error) {
    res.status(500).send({ error })
  }
})

routerTransaction.post("/create", async function (req, res) {
  try {
    console.log("🔥 transactions/create DEBUGGER ->>> ", req.body)

    const { type, label, userCode, isProduction } = req.body;

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

    const formattedIsProduction = isProduction === "false" ? false : isProduction === "true" ? true : !!isProduction

    const test = await db.collection("transactions").insertOne(
      { isProduction: formattedIsProduction, type, label: { ...label, date: new Date(label?.date) }, createdAt: new Date(), userId: user._id });
    console.log(test, "!!!!!")

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

routerTransaction.post("/remove", async (req, res) => {
  try {
    console.log(req.body)

    const { idTransaction } = req.body;

    if (!idTransaction) {
      res.status(404).send({ message: "Missing key idTransaction" });
    }

    const db = await connectingLocal;

    await db.collection("transactions").remove({ _id: ObjectId(idTransaction) });

    res.status(200).json({ message: "Remove successful" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error })
  }
});

module.exports = routerTransaction;
