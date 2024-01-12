import axios from "axios";
import {TSignInForm} from "../types/SignInForm";

const useSignInForm = () => {
    const handleNavigation = () => window.location.href = '/';

    const handleSubmit = async (formData: TSignInForm) => {
        await axios.post('https://at.usermd.net/api/user/auth', formData)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                handleNavigation();
            }).catch(err => console.log(err));
    }

    return {
        handleSubmit
    }
}

export default useSignInForm;
