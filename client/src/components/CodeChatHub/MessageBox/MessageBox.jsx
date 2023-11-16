import { useState } from "react"
import styles from "./styles.module.css"


function MessageBox({socket}) {
    const[message, setMessage] = useState('')

    const onSubmitSend = (e) => {
        e.preventDefault()
        socket.emit('message', {
            text: message,
            name: localStorage.getItem('user'),
            id: `${socket.id}-${Math.random()}`,
            socketID: socket.id
        })
        setMessage('')
    } 
    return (
        <form onSubmit={onSubmitSend}>
            <input type="text" placeholder="message" onChange={(e) => {
                setMessage(e.target.value)}} value={message}/>
            <button>send</button>
        </form>
    )
}
  
export default MessageBox
  