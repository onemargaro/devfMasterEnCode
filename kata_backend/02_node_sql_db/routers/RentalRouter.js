const express = require('express');
const router = express.Router();

const { RentalController } = require('../controllers');

router.post('/rentals', RentalController.create);

module.exports = router;
