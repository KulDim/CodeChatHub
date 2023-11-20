const express = require('express')
const app = express()
const http = require('http').Server(app)
const cors = require('cors')
const path = require('path')
const jwt = require('jsonwebtoken')

const socketIO = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:5173'
    }
})

const PORT = 3000
const tokenKey = '1a2b-3c4d-5e6f-7g8h';


let db = {}

app.use(express.json());

app.post('/api/auth', (req, res) => {
    const json = req.body
    // jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ…M4OX0.vPlw3yoZBLxp2vtVMO05uICjjtKm8-ErVqsIhbgcdaI', tokenKey, (e,d) => {
    //     console.log(d)
    // })
    return res.status(200).json({token: jwt.sign(req.body, tokenKey)})
})


app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use((req, res, next) => {
    return res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'))
})

socketIO.on('connection', (socket)  => {
    console.log('connection')
    console.log(socket.id)

    socket.on('message', (data) => {
        console.log(data)
        socketIO.emit('response', data)
    })

    socket.on('disconnect', () => {
        console.log('disconnect')
        console.log(socket.id)
    })
})

http.listen(PORT, () => {
    console.log('server starting')
})