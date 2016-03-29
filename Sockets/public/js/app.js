var socketio=io();

socketio.on('connect',function(){
  console.log('Connected to the Server');
});

socketio.on('message',function(message){
  $("#logger").append(message);
  console.log("Message received :" + message);

});
socketio.emit('message','This is Hamza');
