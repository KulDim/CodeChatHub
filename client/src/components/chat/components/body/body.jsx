import React from "react";
import styles from './styles.module.css'
import { useNavigate } from "react-router-dom";


const Body = ({messages}) => {
    const navigate = useNavigate()

    const hendelLeave = () => {
        localStorage.removeItem('user')
        navigate('/')
    }
    return(
        <div>
            <header className={styles.header}>
                <div>KulDim</div>
                <button className="close" onClick={hendelLeave}>Покинуть чат</button>
            </header>
            <div className={styles.coutainer}>
                {
                    messages.map(element =>
                        element.name === localStorage.getItem('user') ? (
                        <div className="chats" key={element.id}>
                            <div className={styles.messagesender}>
                                <div className={styles.sender}>
                                    <h5>{element.name}</h5>
                                    <p className={styles.blesk}>{element.text}</p>
                                </div>
                            </div>
                        </div>
                        ) : (
                            <div className="chats"  key={element.id}>
                            <div className={styles.messagerecipiend}>
                                <div>
                                    <h5>вы</h5>
                                    <p className={styles.blesk}>hello</p>
                                </div>
                            </div>
                        </div>
                        )
                    )
                }

            </div>
        </div>
    )
}

export default Body;