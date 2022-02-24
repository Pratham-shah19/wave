const express = require('express');
const { getdata } = require('../controllers/controllers');
const router = express.Router();

router.route('/data').get(getdata);


module.exports = router;