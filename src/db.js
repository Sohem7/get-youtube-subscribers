const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://sohem:rajani123@cluster0.duuk23p.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'myDatabase';
const collectionName = 'subscribers';

async function connect() {
  const client = await MongoClient.connect(url, {
    useUnifiedTopology: true,
  });
  return client.db(dbName).collection(collectionName);
}

module.exports = connect;
