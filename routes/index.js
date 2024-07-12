const router = require('express').Router();

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');
// DONE: import your diagnostics route
const diagnosticRouter = require('./diagnostics');

router.use('/tips', tipsRouter);
router.use('/feedback', feedbackRouter);
// DONE: Initialize diagnostics route
router.use('/diagnostics', diagnosticRouter);

module.exports = router;
