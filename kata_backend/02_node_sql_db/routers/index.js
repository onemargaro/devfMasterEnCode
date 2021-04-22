const express = require('express');
const router = express.Router();

router.use(require('./RentalRouter'))

module.exports = router;
