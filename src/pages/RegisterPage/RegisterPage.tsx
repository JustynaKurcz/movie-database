import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styles from './RegisterPage.module.css'
import useSignUpForm from "./hooks/useSignUpForm";
import {TSignUpForm} from "./types/SignUpForm";

const RegisterPage: React.FC = () => {
    const {handleSubmit} = useSignUpForm();

    const [formData, setFormData] = useState<TSignUpForm>({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit(formData);
    }

    return (
        <div className="app-container">
            <div className={styles.loginContainer}>
                <form className={styles.form} onSubmit={handleFormSubmit}>
                    <p className={styles.formTitle}>Zarejestruj się</p>
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            placeholder="Nazwa"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <span></span>
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <span></span>
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            type="password"
                            placeholder="Hasło"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className={styles.submit}>
                        Zarejestruj się
                    </button>
                    <p className={styles.signupLink}>
                        Nie masz konta? <Link to="/signin">Zaloguj się</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;