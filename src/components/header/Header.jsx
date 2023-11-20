import React from 'react'
import '../../styles/header/header.css'
import LoginButton from './LoginButton'

function Header() {
	return (
		<header className='header'>
			<div className='right-corner'>
				<LoginButton />
			</div>
		</header>
	)
}

export default Header
