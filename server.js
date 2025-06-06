// server.js — entry point of the app
const express = require('express'); // import Express
const db = require('./config/connection'); // import MongoDB connection
const routes = require('./routes'); // import API routes

const PORT = process.env.PORT || 3001; // set default port
const app = express(); // initialize Express app

app.use(express.urlencoded({ extended: true })); // parse URL-encoded bodies
app.use(express.json()); // parse JSON bodies
app.use(routes); // mount API routes

// start server after DB is connected
db.once('open', () => {
app.listen(PORT, () => {
console.log(`API server running on port ${PORT}!`); // fixed: added backticks for template literal
});
});
// end of file