const MongoClient = require("mongodb").MongoClient;

async function connectMongo() {
  const url = 'mongodb://127.0.0.1:27017'
  let db
  const dbName = 'game-of-thrones'

  try {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
      if (err) return console.log(err)

      db = client.db(dbName)
      console.log(`Connected MongoDB: ${url}`)
      console.log(`Database: ${dbName}`)
    })
  } catch (e) {
    console.error(e);
  }
  return db
}

module.exports = connectMongo();