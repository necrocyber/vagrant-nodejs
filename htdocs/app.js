//DEV Antonio Medel
var express = require('express');

var app = express();

app.get('/', function(req, res) {
   res.send('Probando server');
});

app.listen(3000, function() {
   console.log('Escuchando en el puero 3000');
});
