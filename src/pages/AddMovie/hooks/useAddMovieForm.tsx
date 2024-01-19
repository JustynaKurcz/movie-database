import axios from "axios";
import {TAddMovie} from "../types/AddMovie";

const useAddMovieForm = () => {

    const handleAddMovie = async (formData: TAddMovie) => {

        await axios.post('https://at.usermd.net/api/movies', formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(response => {
            // window.location.href = '/'
            console.log(formData)
            console.log(response);
        })
            .catch(err => console.log(err));
    }

    return {
        handleAddMovie
    }
}

export default useAddMovieForm;
