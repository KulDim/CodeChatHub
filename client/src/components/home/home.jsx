import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./styles.module.css"
import axios from 'axios';

function Home({socket}) {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        socketIO: '',
    })


    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const onSubmitSend = (e) => {
        e.preventDefault()
        navigate('/CodeChatHub')
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }))
      }

    const handleSubmit = async (e) => {
        e.preventDefault()
        formData.socketIO = socket.id
        const response = await axios.post(`${window.location.origin}/api/auth`, formData);
        console.log(response.data);
        // localStorage.setItem('auth', jws_token)
    }

    return (
        <div className={styles.Home}>
            <h1 className={styles.title}>CodeChatHub</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input className={styles.input} type="text" onChange={handleChange} value={formData.username} placeholder="username" name="username"/>
                <input className={styles.input} type="text" onChange={handleChange} value={formData.password} placeholder="password" name="password"/>
                <button className={styles.button}>Войти</button>
            </form>
        </div>
    )
}

export default Home
