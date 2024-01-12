import axios from "axios";
import {TAddMovie} from "../types/AddMovie";

const useAddMovieForm = () => {

    const handleAddMovie = async (formData: TAddMovie) => {
        await axios.post('https://at.usermd.net/api/movies', formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(() => window.location.href = '/')
            .catch(err => console.log(err));
    }

    return {
        handleAddMovie
    }
}

export default useAddMovieForm;