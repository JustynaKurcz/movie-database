import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/loginButton.css'

function LoginButton() {
	const navigate = useNavigate()

	const handleLoginClick = () => {
		navigate('/signin')
	}

	return (
		<button className='login-button' onClick={handleLoginClick}>
			Zaloguj się
		</button>
	)
}

export default LoginButton
