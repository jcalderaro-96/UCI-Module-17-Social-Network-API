// routes/index.js — root router to combine all routes
const router = require('express').Router(); // create router
const apiRoutes = require('./api'); // import API routes

router.use('/api', apiRoutes); // mount API under /api

router.use((req, res) => {
res.status(404).send('Not Found'); // fallback for undefined routes
}); // end route

module.exports = router; // export router
// end of file