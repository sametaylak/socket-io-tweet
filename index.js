var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname+'/views/index.html');
});

io.on('connection', function(socket){
  console.log('Kullanıcı Bağlandı!'); // Sunucuya gelen kullanıcılar için görsel bir uyarı sistemi

  socket.on('tweet', function(twt){
    console.log('Gelen Tweet: ' + twt);
    io.emit('tweet', twt); // Sunucuya gelen tweeti tüm kullanıcılara gönderdik
  });

});

// Uygulamamızı 3000 portunda çalıştırdık
http.listen(3000, function(){
  console.log('3000 portu dinleniyor...');
});