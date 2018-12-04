var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('msg',function(msg){

    var data = {
      message : msg
    }

    socket.emit('message',data);
    socket.broadcast.emit('message',data);
    console.log(msg);

  });
});


http.listen(5000, function(){
  console.log('listening on *:3000');
  
});