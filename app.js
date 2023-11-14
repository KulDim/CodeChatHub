// Подключение модулей
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// Создание приложения Express
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Поддержка статических файлов (например, HTML, CSS)
app.use(express.static(__dirname + '/public'));

// Отправка файла index.html при обращении к корневому URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Событие при подключении нового пользователя
io.on('connection', (socket) => {
    console.log('Пользователь подключен');
  
    // Генерация уникального имени пользователя
    const username = 'Пользователь' + Math.floor(Math.random() * 1000);
  
    // Отправка сообщения о подключении нового пользователя с его именем
    io.emit('chat message', { type: 'system', text: `${username} присоединился к чату` });
  
    // Событие при отправке сообщения
    socket.on('chat message', (msg) => {
      console.log('Сообщение: ' + msg);
      // Отправка сообщения всем подключенным пользователям с именем отправителя
      io.emit('chat message', { type: 'user', username: username, text: msg });
    });
  
    // Событие при отключении пользователя
    socket.on('disconnect', () => {
      console.log('Пользователь отключен');
      // Отправка сообщения о отключении пользователя с его именем
      io.emit('chat message', { type: 'system', text: `${username} покинул чат` });
    });
  });

// Запуск сервера на порту 3000
server.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
