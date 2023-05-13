const MongoClient = require("mongodb").MongoClient;

const urlFreeMongoCluster = process.env.CLUSTER_URL;
const urlMongoLocal = process.env.LOCAL_URL;

if (!urlMongoLocal) {
  throw new Error("❌ LOCAL_URL not found. Please update .env")
}
if (!urlFreeMongoCluster) {
  throw new Error("❌ CLUSTER_URL not found. Please update .env")
}

// const connectingFreeCluster = MongoClient.connect(urlFreeMongoCluster, { useNewUrlParser: true }).then((client) => {
//   console.log("✅ Connected mongodb cluster")

//   return client.db('3m')
// }).catch((err) => {
//   throw new Error(err)
// })

const connectingLocal = MongoClient.connect(urlMongoLocal, { useNewUrlParser: true, useUnifiedTopology: true }).then((client) => {
  console.log("✅ Connected mongodb local (27017)")

  return client.db('3m')
}).catch((err) => {
  throw new Error(err)
})


module.exports = { connectingFreeCluster: "", connectingLocal }