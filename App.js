let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

//Fix the static files location
app.use(express.static(__dirname + '/assets'));

app.get('/', function(req, res){
    res.sendFile('./views/home/index.html', {root: __dirname});
});

io.on('connection', function(socket){
    console.log('a user connected');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});