import React, {FormEvent, useState} from 'react'
import {Link} from 'react-router-dom'
import styles from '../shared/styles/auth.module.css'
import useSignInForm from "./hooks/useSignInForm";
import {TSignInForm} from "./types/SignInForm";

const LoginPage: React.FC = () => {
    const {handleSubmit} = useSignInForm();
    const [formData, setFormData] = useState<TSignInForm>({
        login: '',
        password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit(formData);
    };

    return (
        <div>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleFormSubmit}>
                    <p className={styles.formTitle}>Zaloguj się na swoje konto</p>
                    <div className={styles.inputContainer}>
                        <input type='email'
                               placeholder='Email'
                               name='login'
                               value={formData.login}
                               onChange={handleInputChange}
                        />
                        <span></span>
                    </div>
                    <div className={styles.inputContainer}>
                        <input type='password'
                               placeholder='Hasło'
                               name='password'
                               value={formData.password}
                               onChange={handleInputChange}
                        />
                    </div>
                    <button type='submit' className={styles.submit}>
                        Zaloguj się
                    </button>
                    <p className={styles.signupLink}>
                        Nie masz konta? <Link to='/signup'>Zarejestruj się</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
