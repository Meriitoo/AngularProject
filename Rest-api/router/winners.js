const express = require('express');
const router = express.Router();

var winnersController = require('../controllers/winnerController');

router.post('/create', winnersController.createWinnerControllerFn);


module.exports = router;