import axios from 'axios';
import {TSignUpForm} from "../types/SignUpForm";

const useSignUpForm = () => {
    const handleNavigation = () => window.location.href = '/';

    const handleSubmit = async (formData: TSignUpForm) => {

        await axios.post('https://at.usermd.net/api/user/create', formData)
            .then(() => handleNavigation())
            .catch((err) => console.log(err));
    }

    return {
        handleSubmit
    };
};

export default useSignUpForm;
