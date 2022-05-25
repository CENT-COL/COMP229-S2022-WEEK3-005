const indexController = require('../controllers/index.server.controller')
const express = require('express');

const router = express.Router();

//route to GET request on "http://localhost:3000/""
router.get('/', indexController.render);

module.exports = router;