import socketIO from 'socket.io-client'
import { Routes, Route } from 'react-router-dom'
import CodeChatHub from './components/CodeChatHub/CodeChatHub'
import Home from './components/home/home'
import styles from "./styles.module.css"


const socket = socketIO.connect("http://localhost:3000")
// const socket = socketIO.connect("http://192.168.0.103:3000")



function App() {
  return (
  <div className={styles.App}>
    <Routes>
        <Route path='/CodeChatHub' element={<CodeChatHub socket={socket}/>} />
        <Route path='/' element={<Home socket={socket}/>} />
      </Routes>
  </div>
  )
}

export default App
