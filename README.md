# Node.js Application with MongoDB

This is a simple Node.js application that uses MongoDB as the database to store subscribers' data. The application allows you to perform basic CRUD operations (Create, Read, Update, Delete) on subscribers.

## Getting Started

To run this application on your local machine, you need to have Node.js and MongoDB installed.

1. Clone the repository to your local machine:

git clone <repository-url>
cd <repository-folder>

Install the required dependencies: npm install

Create the database and seed initial data: node src/createDatabase.js

Start the server: node src/index.js

The server will start running on http://localhost:3000. You can now access the API endpoints described below.

API Endpoints
Get All Subscribers
Get a list of all subscribers.

URL: /subscribers
Method: GET
Response: An array of subscriber objects.
Get Subscribers' Names
Get an array of subscribers' names only.

URL: /subscribers/names
Method: GET
Response: An array of subscriber names.
Get a Specific Subscriber
Get the details of a subscriber with the given id.

URL: /subscribers/:id
Method: GET
Parameters: id (string) - The unique ID of the subscriber.
Response: The subscriber object with the given id.
Error Response: Status code 400 and an error message if the id does not match any subscriber.
Example Usage
Assuming the server is running on http://localhost:3000:

To get all subscribers, make a GET request to http://localhost:3000/subscribers.

To get an array of subscribers' names, make a GET request to http://localhost:3000/subscribers/names.

To get the details of a specific subscriber with ID '1', make a GET request to http://localhost:3000/subscribers/1.

Technologies Used
Node.js
MongoDB
Express
Contributing
Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.

License
This project is licensed under the MIT License