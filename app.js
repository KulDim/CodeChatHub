const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const connectedSockets = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    socket.id = 0
    connectedSockets.push({id: 0, name: 'name'})

    io.emit("connection",'chat message');

    console.log(connectedSockets);
});

io.on('disconnect', () => {
    console.log('Пользователь отключен');
    delete connectedSockets[socket.id];
  });

server.listen(3000, () => {
    console.log('listening on *:3000');
});