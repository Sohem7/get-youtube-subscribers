const connect = require('./db');

async function createDatabase() {
  const collection = await connect();
  const subscribers = [
    {
      _id: '3', // Add unique IDs for each subscriber
      name: 'xyz ',
      subscribedChannel: 'Channel 5',
    },
    {
      _id: '4', // Add unique IDs for each subscriber
      name: 'abc',
      subscribedChannel: 'Channel 4',
    },
    {
      _id: 'dfg', // Add unique IDs for each subscriber
      name: 'Jane Smith',
      subscribedChannel: 'Channel 4',
    },
  ];

  await collection.insertMany(subscribers);
  console.log('Database and initial data created successfully.');
}

createDatabase().catch((error) => console.error(error));
