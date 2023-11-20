import styles from "./styles.module.css"

function MessageChat({messages}) {
    return (
        <div className={styles.MessageChat}> 
            <div className={styles.messages}>
            {
                messages.map(element =>
                    <div key={element.id} className={styles.message}>
                        <div className={element.name == localStorage.getItem('user') ? styles.sender: styles.receiver}>
                            <span>{element.name}</span>
                            <span>{element.text}</span>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    )
}
  
export default MessageChat
  