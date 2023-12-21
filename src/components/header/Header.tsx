import React from 'react';
import styles from './styles/header.module.css';
import {Container} from '@mantine/core';
import NavigationLinks from "./NavigationLinks";


const Header = () => {
    return (
        <header className={styles.header}>
            <Container size="md" className={styles.inner}>
                <div className={styles.logoContainer}>
                    <img src={'movie.png'} alt='Movie Logo' className={styles.logoHeader}/>
                </div>
                <NavigationLinks/>
            </Container>
        </header>
    );
}

export default Header;
