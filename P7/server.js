var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var Marcador={
        local:0,
        visitante:0
    };

app.use("/public", express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    io.emit('redibujar-marcador', Marcador);
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('Gol-visitant', function(){
        Marcador.visitante+=1;
        io.emit('actualitza-marcador', Marcador);
    });
    socket.on('Gol-local', function(){
        Marcador.local+=1;
        io.emit('actualitza-marcador', Marcador);
    });
});

http.listen(3000, function(){
});


