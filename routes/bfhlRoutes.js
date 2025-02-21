const express = require('express');
const { handlePostRequest, handleGetRequest } = require('../controller/bfhlController');

const router = express.Router();

router.post('/', handlePostRequest);
router.get('/', handleGetRequest);

module.exports = router;