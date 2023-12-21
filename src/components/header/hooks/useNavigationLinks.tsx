import { useState } from "react";
import { TLink } from "../types/Link";

const useNavigationLinks = (): TLink[] => {
    const [navigationLinks] = useState<TLink[]>([
        { link: '/', label: 'Home' },
        { link: '/signin', label: 'Logowanie' },
        { link: '/signup', label: 'Rejestracja' },
        { link: '/add', label: 'Dodaj film' },
    ]);

    return navigationLinks;
};

export default useNavigationLinks;
