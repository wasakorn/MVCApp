var express = require('express');

module.exports = function(){
    var app = express();
    require('../app/routes/index.routes')(app);
    return app;
};