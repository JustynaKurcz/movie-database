import React from 'react';
import styles from '../../styles/header/header.module.css';
import { Container} from '@mantine/core';
import { useDisclosure } from "@mantine/hooks";
import {Link, useLocation} from "react-router-dom";

const links = [
	{ link: '/', label: 'Home' },
	{ link: '/signin', label: 'Logowanie' },
	{ link: '/signup', label: 'Rejestracja' },
	{ link: '/add', label: 'Dodaj film' },
];


function Header() {
	const location = useLocation();
	const [opened, { toggle }] = useDisclosure(false);

	return (
		<header className={styles.header}>
			<Container size="md" className={styles.inner}>
				<div className={styles.logoContainer}>
					<img src={'movie.png'} alt='Movie Logo' className={styles.logoHeader}/>
				</div>
				<div className={styles.linkContainer}>
					{links.map((link) => (
						<Link
							key={link.label}
							to={link.link}
							className={`${styles.link} ${location.pathname === link.link ? styles.active : ''}`}
						>
							{link.label}
						</Link>
					))}
				</div>
			</Container>
		</header>
	);
}

export default Header;
