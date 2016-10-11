var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Indica quina pàgina vols veure a la barra del navegador');
});

app.listen(3000, function () {
  app.use(express.static('public'));
});

