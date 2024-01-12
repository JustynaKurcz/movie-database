import React from 'react'
import styles from './styles/searchBar.module.css'

function SearchBar() {
	return (
		<div className={styles.searchBar}>
			<input type='text' placeholder='Wyszukaj...' />
		</div>
	)
}

export default SearchBar
