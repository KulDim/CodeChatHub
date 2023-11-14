import React, { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import Body from "./components/body/body";
import Message from "./components/message/message";

import styles from './styles.module.css'

const Chat = ({socket}) => {

    const [messages, setMessages] = useState([])

    useEffect(()=>{
        socket.on('response', (data) => {
            setMessages([...messages, data])
        })
    },[socket, messages])

    return(
        <div className={styles.Chat}>
            <div className={styles.Sidebar}>
                <h4 className={styles.animatedtext}>CodeChatHub</h4>
                <Sidebar/>
            </div>
            <main className={styles.main}>
                <div>
                    <div className={styles.block}>
                        <Body messages={messages}/>
                        <Message socket={socket}/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Chat;