import { useNavigate } from "react-router-dom"
import styles from "./styles.module.css"
import { useState } from "react"

function Home() {
    const [user, setUser] = useState('');
    const navigate = useNavigate()

    const onSubmitSend = (e) => {
        e.preventDefault()
        localStorage.setItem('user', user)
        navigate('/CodeChatHub')
    }

    return (
        <div className={styles.Home}>
            <h1 className={styles.title}>CodeChatHub</h1>
            <form onSubmit={onSubmitSend} className={styles.form}>
                <input className={styles.input} type="text" onChange={(e) => setUser(e.target.value)} value={user}/>
                <button className={styles.button}>войти</button>
            </form>
        </div>
    )
}

export default Home
