const express = require('express')
const app = express()
const http = require('http').Server(app)
const cors = require('cors')
const path = require('path')

const socketIO = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:5173'
    }
})

const PORT = 2020



app.get('/api', (req, res) => {
    res.json({
        message: 'hello'
    })
})


app.use(express.static(path.join(__dirname, 'dist')));

socketIO.on('connection', (socket)  => {
    console.log('connection')
    console.log(socket.id)

    socket.on('message', (data) => {
        console.log(data)
        socketIO.emit('response', data)
    })

    socketIO.on('disconnect', () => {
        console.log('disconnect')
        console.log(socket.id)
    })
})


http.listen(PORT, () => {
    console.log('server starting')
})