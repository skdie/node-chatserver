var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.send("hello");
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


http.listen(port, function(){
  console.log('listening on *:3000');
  
});

// app.listen(port);