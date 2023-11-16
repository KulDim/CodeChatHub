import { useEffect, useState } from "react"
import styles from "./styles.module.css"

function CodeChatHub({socket}) {
    const [messages, setMessages] = useState([])
    const[message, setMessage] = useState('')
    const[name, setName] = useState('')

    const onSubmitSend = (e) => {
        e.preventDefault()
        socket.emit('message', {
            text: message,
            name: name,
            id: `${socket.id}-${Math.random()}`,
            socketID: socket.id
        })
        setMessage('')
    }

    useEffect(()=>{
        socket.on('response', (data) => {
            setMessages([...messages, data])
        })
    },[socket,messages])

    return (
        <div>
            <div> 
            {
                messages.map(element =>
                    <div key={element.id}>
                        <div className={element.name == name ? styles.sender: styles.receiver}>
                            <span>{element.name}</span>
                            <span>{element.text}</span>
                        </div>
                    </div>
                )
            }
            </div>
            <form onSubmit={onSubmitSend}>
                <input type="text" placeholder="name" onChange={(e) => {
                    setName(e.target.value)
                }} value={name}/>
                <input type="text" placeholder="message" onChange={(e) => {
                    setMessage(e.target.value)
                }} value={message}/>
                <button>send</button>
            </form>
        </div>
    )
}

export default CodeChatHub