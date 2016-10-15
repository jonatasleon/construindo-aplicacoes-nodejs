'use strict';

const express = require('express');
const ReverseTextController = require('../controllers/ReverseTextController');

const router = express.Router();

router.get('/', ReverseTextController.reverseText);

module.exports = router;
