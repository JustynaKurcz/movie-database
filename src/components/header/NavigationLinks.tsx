import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useNavigationLinks from './hooks/useNavigationLinks';
import styles from './styles/navigationLinks.module.css';

const NavigationLinks = () => {
    const location = useLocation();
    const navigationLinks = useNavigationLinks();

    return (
        <div className={styles.linkContainer}>
            {navigationLinks.map((link) => (
                <Link
                    key={link.label}
                    to={link.link}
                    className={`${styles.link} ${
                        location.pathname === link.link ? styles.active : ''
                    }`}
                    onClick={link.onClick}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
};

export default NavigationLinks;
