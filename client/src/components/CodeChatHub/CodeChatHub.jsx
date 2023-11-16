import { useEffect, useState } from "react"


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
                {/* переделать выводы  */}
            {
                    messages.map(element =>
                        element.name === name ? (
                        <div className="chats" key={element.id}>
                            <div>
                                <div>
                                    <h5>{element.name}</h5>
                                    <p>{element.text}</p>
                                </div>
                            </div>
                        </div>
                        ) : (
                            <div className="chats"  key={element.id}>
                            <div>
                                <div>
                                    <h5>вы</h5>
                                    <p>hello</p>
                                </div>
                            </div>
                        </div>
                        )
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