import React from 'react'
import '../styles/footer.css'

function Footer() {
	return (
		<footer>
			<span className='footer-text'>
                Justyna Kurcz | {new Date().getFullYear()}
            </span>
		</footer>
	)
}

export default Footer
