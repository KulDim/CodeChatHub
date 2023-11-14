import React, { useState } from "react";
import styles from "./styles.module.css"

const Message = ({socket}) => {
    const[message, setMessage] = useState('')

    const heandleSend = (e) => {
        e.preventDefault()
        socket.emit('message', {
            text: message,
            name: localStorage.getItem('user'),
            id: `${socket.id}-${Math.random()}`,
            socketID: socket.id
        })
        setMessage('')

    }

    return(
        <div className="message-Block">
            <form onSubmit={heandleSend}>
                <input type="text" className={styles.usermessage} value={message} onChange={
                    (e) => {
                        setMessage(e.target.value)
                    }
                }/>
                <button>message</button>
            </form>
        </div>
    )
}

export default Message;