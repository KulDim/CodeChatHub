import socketIO from 'socket.io-client'
import { Routes, Route } from 'react-router-dom'
import CodeChatHub from './components/CodeChatHub/CodeChatHub'
import Home from './components/home/home'


const socket = socketIO.connect("http://localhost:3000")

function App() {
  return (
  <Routes>
    <Route path='/CodeChatHub' element={<CodeChatHub socket={socket}/>} />
    <Route path='/' element={<Home socket={socket}/>} />
  </Routes>
  )
}

export default App
