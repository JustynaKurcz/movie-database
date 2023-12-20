import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styles from './RegisterPage.module.css'
import Header from "../../components/header/Header";

const LoginPage: React.FC = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/signup')
    }

    return (
        <div className='app-container'>
            <Header/>
            <div className={styles.loginContainer}>
                <form className={styles.form}>
                    <p className={styles.formTitle}>Zarejestruj się</p>
                    <div className={styles.inputContainer}>
                        <input type='text' placeholder='Login'/>
                        <span></span>
                    </div>
                    <div className={styles.inputContainer}>
                        <input type='text' placeholder='Nazwa'/>
                        <span></span>
                    </div>
                    <div className={styles.inputContainer}>
                        <input type='email' placeholder='Email'/>
                        <span></span>
                    </div>
                    <div className={styles.inputContainer}>
                        <input type='password' placeholder='Hasło'/>
                    </div>
                    <button type='submit' className={styles.submit} onClick={handleLogin}>
                        Zarejestruj się
                    </button>
                    <p className={styles.signupLink}>
                        Nie masz konta? <Link to='/signin'>Zaloguj się</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default LoginPage