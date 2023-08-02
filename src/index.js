const express = require('express');
const app = express();
const connect = require('./db');

app.use(express.json());

app.get('/subscribers', async (req, res) => {
  const collection = await connect();
  const subscribers = await collection.find({}).toArray();
  res.json(subscribers);
});

app.get('/subscribers/names', async (req, res) => {
  const collection = await connect();
  const subscribers = await collection.find({}, { projection: { name: 1, _id: 0 } }).toArray();

  if (subscribers.length > 0) {
    const names = subscribers.map((subscriber) => subscriber.name);
    const subscribedChannel = subscribers.map((subscriber) => subscriber.subscribedChannel)
    res.json(names);
    res.json(subscribedChannel);
  } else {
    res.status(404).json({ message: 'No subscribers found' });
  }
});


app.get('/subscribers/:id', async (req, res) => {
  const id = req.params.id;
  const collection = await connect();
  const subscriber = await collection.findOne({ _id: id });

  if (subscriber) {
    res.json(subscriber);
  } else {
    res.status(400).json({ message: 'Subscriber not found' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
