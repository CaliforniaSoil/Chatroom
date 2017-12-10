// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
// var user = Object.keys(io.sockets.sockets);

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function(socket){
//   console.log(`${user} joined the chatroom`);
//     socket.on('disconnect', function(){
//       console.log(`${user} left the chatroom`);
//   });
// });

// io.on('connection', function(socket){
//     socket.on('chat message', function(msg){
//       console.log('message: ' + msg);
//     });
//   });

// io.on('connection', function(socket){
//     socket.on('chat message', function(msg){
//       io.emit('chat message', msg);
//     });
//   });

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });


   