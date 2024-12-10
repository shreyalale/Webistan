const express = require('express'); 
const cors = require('cors'); //CORS middleware to allow cross origin requests
const bodyParser = require('body-parser'); //Body parser to parse incoming request bodies 
const hourLogRoutes = require('./routes/hourlogroutes');

//loading env vairables from .env
require('dotenv').config();

//instace of express app
const app = express();
// Enabling Cross-Origin Resource Sharing (CORS) for all incoming requests
app.use(cors());
// bodyParser middleware to parse JSON data in the request body
app.use(bodyParser.json());
// Using the hourLogRoutes for all API requests under '/api'
app.use('/api', hourLogRoutes);

// Defining the server's port
const PORT = process.env.PORT || 5000;
// Starting the server and logging the running port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//app.use(cors()); // Enable CORS for all requests
app.use(express.json());  // This is the modern alternative to bodyParser.json() in Express


