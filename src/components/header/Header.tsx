import React from 'react';
import styles from './styles/header.module.css';
import { Container } from '@mantine/core';
import NavigationLinks from "./NavigationLinks";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container size="lg" className={styles.inner}>
                <div className={styles.logoContainer}>
                    <img src={'movie.png'} alt='Movie Logo' className={styles.logoHeader}/>
                </div>
                <div className={styles.navigationLinks}>
                    <NavigationLinks/>
                </div>
            </Container>
        </header>
    );
}

export default Header;
