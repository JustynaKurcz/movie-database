import {CopyrightOutlined} from '@ant-design/icons'
import styles from './styles/footer.module.css'
import React, {memo} from "react";

const Footer: React.FC = memo(() => {
    return (
        <footer>
			<span className={styles.footerText}>
				<CopyrightOutlined/>
				   Justyna Kurcz | {new Date().getFullYear()}
			</span>
        </footer>
    )
});

export default Footer;