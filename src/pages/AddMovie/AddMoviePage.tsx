import React, {useState} from 'react';
import styles from './AddMoviePage.module.css';
import {TAddMovie} from "./types/AddMovie";
import useAddMovieForm from "./hooks/useAddMovieForm";
const AddMoviePage: React.FC = () => {
    const {handleAddMovie} = useAddMovieForm();
    const [formData, setFormData] = useState<TAddMovie>({
        title: '',
        content: '',
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
                        placeholder='Title'
                        name='title'
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                    <input
                        type='text'
                        placeholder='Content'
                        name='content'
                        value={formData.content}
                        onChange={handleInputChange}
                    ></input>
                    <input
                        type='text'
                        placeholder='Image URL'
                        name='image'
                        value={formData.image}
                        onChange={handleInputChange}
                    />
                    <button type='submit'>Add Movie</button>
                </form>
            </div>
        </div>
    );
};

export default AddMoviePage;
