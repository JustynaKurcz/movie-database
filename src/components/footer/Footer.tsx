import { CopyrightOutlined, LinkedinOutlined } from '@ant-design/icons';
import styles from './styles/footer.module.css';
import React, { memo } from 'react';

const Footer: React.FC = memo(() => {
	return (
		<footer>
            <span className={styles.footerText}>
                <CopyrightOutlined /> Justyna Kurcz | {new Date().getFullYear()}
            </span>
			<a
				href="https://www.linkedin.com/in/justyna-kurcz-0aa499287/"
				target="_blank"
				rel="noopener noreferrer"
				className={styles.linkedin}
			>
				<LinkedinOutlined /> LinkedIn
			</a>
		</footer>
	);
});

export default Footer;
