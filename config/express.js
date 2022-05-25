const express = require('express');

module.exports = function () {
    const app = express();

    require('../app/routes/index.server.routes');

    console.log('test');

    return app;
}