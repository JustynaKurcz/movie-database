import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styles from './LoginPage.module.css'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const LoginPage: React.FC = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/signin')
    }

    return (
        <div className='app-container'>
            <Header/>
            <div className={styles.loginContainer}>
                <form className={styles.form}>
                    <p className={styles.formTitle}>Zaloguj się na swoje konto</p>
                    <div className={styles.inputContainer}>
                        <input type='email' placeholder='Email'/>
                        <span></span>
                    </div>
                    <div className={styles.inputContainer}>
                        <input type='password' placeholder='Hasło'/>
                    </div>
                    <button type='submit' className={styles.submit} onClick={handleLogin}>
                        Zaloguj się
                    </button>
                    <p className={styles.signupLink}>
                        Nie masz konta? <Link to='/signup'>Zarejestruj się</Link>
                    </p>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default LoginPage