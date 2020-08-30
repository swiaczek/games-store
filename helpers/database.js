const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect('mongodb+srv://swiaczek95:tL7pZdYV6MncOBAD@cluster0.wthvk.mongodb.net/shop?retryWrites=true&w=majority')
    .then(client => {
      _db = client.db();
      callback()
      console.log('Connected!')
    })
    .catch(error => {
      console.log('Something went wrong', error)
      throw error;
    })
}

const getDb = () => {
  if (_db) {
    return _db
  }
  throw "No database found!"
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;