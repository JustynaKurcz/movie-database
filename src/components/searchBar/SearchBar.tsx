import React, { useState } from 'react';
import styles from './styles/searchBar.module.css';

interface SearchBarProps {
	onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newSearchTerm = e.target.value;
		setSearchTerm(newSearchTerm);
		onSearch(newSearchTerm);
	};

	return (
		<div className={styles.searchBar}>
			<input
				type='text'
				placeholder='Wyszukaj...'
				value={searchTerm}
				onChange={handleChange}
			/>
		</div>
	);
};

export default SearchBar;
