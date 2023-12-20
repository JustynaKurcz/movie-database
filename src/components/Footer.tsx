import { Container } from '@mantine/core'
import { CopyrightOutlined } from '@ant-design/icons'
import '../styles/footer.css'

export default function Footer() {
	return (
		<footer>
			<span className='footer-text'>
				<CopyrightOutlined />
				Justyna Kurcz | {new Date().getFullYear()}
			</span>
		</footer>
	)
}
