const connect = require('./db');

async function createDatabase() {
  const collection = await connect();
  const subscribers = [
    {
      _id: '1', // Add unique IDs for each subscriber
      name: 'John Doe',
      subscribedChannel: 'Channel A',
    },
    {
      _id: '2', // Add unique IDs for each subscriber
      name: 'Jane Smith',
      subscribedChannel: 'Channel B',
    },
  ];

  await collection.insertMany(subscribers);
  console.log('Database and initial data created successfully.');
}

createDatabase().catch((error) => console.error(error));
