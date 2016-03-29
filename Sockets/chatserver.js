

var express = require('express');
var app = express();
var http = require('http').Server(app);

var directory =app.use(express.static(__dirname + '/public'))

var io = require('socket.io')(http);

io.on('connection',function(socket){
  console.log('Connected to socket.io');

  socket.on('message',function(message){
    console.log("Message from client" +message);
    socket.broadcast.emit('message',message);
  });


  io.emit('message',"Hello World");
  console.log("Event emitted");


})

http.listen(4030,function(){
  console.log("Server has started listening");
});
