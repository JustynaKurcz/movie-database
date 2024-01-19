import React, {useState} from 'react';
import styles from './styles/AddMoviePage.module.css';
import {TAddMovie} from "./types/AddMovie";
import useAddMovieForm from "./hooks/useAddMovieForm";
const AddMoviePage: React.FC = () => {
    const {handleAddMovie} = useAddMovieForm();
    const [formData, setFormData] = useState<TAddMovie>({
        title: '',
        content: '',
        rate: 0,
        image: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddMovie(formData);
    }

    return (
        <div className={styles.container}>
            <div className={styles.addMovieContainer}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Tytuł'
                        name='title'
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                    <input
                        type='text'
                        placeholder='Opis'
                        name='content'
                        value={formData.content}
                        onChange={handleInputChange}
                    ></input>
                    <input
                        type='text'
                        placeholder='Ocena'
                        name='rate'
                        value={formData.rate}
                        onChange={handleInputChange}
                    ></input>
                    <input
                        type='text'
                        placeholder='Obraz'
                        name='image'
                        value={formData.image}
                        onChange={handleInputChange}
                    />
                    <button type='submit'>Dodaj film</button>
                </form>
            </div>
        </div>
    );
};

export default AddMoviePage;
