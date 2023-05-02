const MongoClient = require("mongodb").MongoClient;

const url = process.env.CLUSTER_URL || 'mongodb://127.0.0.1:27017'

const connecting = MongoClient.connect(url, { useNewUrlParser: true }).then((client) => {
  return client.db('3m')
}).catch(err => {
  if (err) throw err
})


module.exports = connecting