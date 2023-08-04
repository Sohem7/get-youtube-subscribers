const express = require('express');
const app = express();
const connect = require('./db');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /subscribers:
 *   get:
 *     summary: Get all subscribers
 *     description: Retrieve a list of all subscribers.
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Subscriber'
 *       500:
 *         description: Server error
 */

app.get('/subscribers', async (req, res) => {
  const collection = await connect();
  const subscribers = await collection.find({}).toArray();
  res.json(subscribers);
});

/**
 * @swagger
 * /subscribers/names:
 *   get:
 *     summary: Get subscribers' names
 *     description: Retrieve an array of subscribers' names.
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *       500:
 *         description: Server error
 */

app.get('/subscribers/names', async (req, res) => {
  const collection = await connect();
  const subscribers = await collection.find({}, { projection: { name: 1, _id: 0 } }).toArray();

  if (subscribers.length > 0) {
    const names = subscribers.map((subscriber) => subscriber.name);
    res.json(names);
  } else {
    res.status(404).json({ message: 'No subscribers found' });
  }
});

/**
 * @swagger
 * /subscribers/{id}:
 *   get:
 *     summary: Get a specific subscriber
 *     description: Retrieve the details of a subscriber with the given ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the subscriber to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subscriber'
 *       400:
 *         description: Subscriber not found
 *       500:
 *         description: Server error
 */

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
