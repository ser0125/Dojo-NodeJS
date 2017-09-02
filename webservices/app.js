var express = require('express');
var routes = require('./routes');
var bodyParser = require('body-parser');
var app = express();

app.listen(3000,function(){
  console.log("Escuchando el puerto 3000");
});

app.use(bodyParser.urlencoded({extend : true}));
app.use('/', routes);
