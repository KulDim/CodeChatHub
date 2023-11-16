import styles from "./styles.module.css"

function MessageChat({messages}) {
    return (
        <div className={styles.MessageChat}> 
            {
                messages.map(element =>
                    <div key={element.id}>
                        <div className={element.name == localStorage.getItem('user') ? styles.sender: styles.receiver}>
                            <span>{element.name}</span>
                            <span>{element.text}</span>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
  
export default MessageChat
  