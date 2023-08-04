const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node.js Application with MongoDB API',
      version: '1.0.0',
      description: 'A simple API to manage subscribers with MongoDB integration',
    },
  },
  apis: ['./src/index.js'], // Path to your API routes file
};

const specs = swaggerJsDoc(options);

module.exports = specs;
