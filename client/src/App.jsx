
import './App.css'

import socketIO from 'socket.io-client'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/home'
import Chat from './components/chat/chat'

const socket = socketIO.connect('http://localhost:3000')

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home socket={socket}/>} />
      <Route path='/chat' element={<Chat socket={socket}/>} />
    </Routes>
  )
}

export default App
