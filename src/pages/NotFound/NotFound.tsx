import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/notFound.module.css';
const NotFound: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404 - Not Found!</h1>
            <p className={styles.text}>Przepraszamy, ale strona, której szukasz, nie istnieje.</p>
            <Link to="/" className={styles.link}>
                Wróć do strony głównej
            </Link>
        </div>
    );
};

export default NotFound;
