import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import SideBar from "./SideBar/SideBar"
import MessageBox from "./MessageBox/MessageBox"
import MessageChat from "./MessageChat/MessageChat"
import MessageHead from "./MessageHead/MessageHead"
import styles from "./styles.module.css"

function CodeChatHub({socket}) {
    const [messages, setMessages] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        socket.on('response', (data) => {
            setMessages([...messages, data])
        })
    },[socket,messages])

    useEffect(() => {
        if(!localStorage.getItem('user')) navigate('/')
    })

    return (
        <div className={styles.CodeChatHub}>
            <SideBar/>
            <div className={styles.Message}>
                <MessageHead/>
                <MessageChat messages={messages}/>
                <MessageBox socket={socket}/>
            </div>
        </div>
    )
}

export default CodeChatHub