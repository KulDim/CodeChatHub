import socketIO from 'socket.io-client'
import { Routes, Route } from 'react-router-dom'
import CodeChatHub from './components/CodeChatHub/CodeChatHub'


const socket = socketIO.connect('http://192.168.0.72:2020')

function App() {
  return (
  <Routes>
    <Route path='/' element={<CodeChatHub socket={socket}/>} />
  </Routes>
  )
}

export default App
