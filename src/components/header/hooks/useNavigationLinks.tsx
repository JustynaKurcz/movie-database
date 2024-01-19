import { useState, useEffect } from "react";
import { TLink } from "../types/Link";
import { JwtPayload, jwtDecode } from 'jwt-decode';
import axios from "axios";

const useNavigationLinks = (): TLink[] => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
        !!localStorage.getItem('token')
    );

    const [navigationLinks, setNavigationLinks] = useState<TLink[]>([]);

    const handleLogout = async () => {
        const token = localStorage.getItem('token');
        const decodedToken: any = jwtDecode<JwtPayload>(token!);
        const userId = decodedToken.userId;

        await axios.delete(`https://at.usermd.net/api/user/logout/${userId}`)
            .then(response => {
                localStorage.removeItem('token');
                setIsLoggedIn(false);
                window.location.href = '/';
            }).catch(err => console.log(err));
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    useEffect(() => {
        setNavigationLinks([
            { link: '/', label: 'Strona główna' },
            ...(isLoggedIn
                ? [
                    { link: '/add', label: 'Dodaj film' },
                    { link: `/`, label: 'Wyloguj', onClick: handleLogout },
                ]
                : [
                    { link: '/signin', label: 'Logowanie' },
                    { link: '/signup', label: 'Rejestracja' },
                ]),
        ]);
    }, [isLoggedIn]);

    return navigationLinks;
};

export default useNavigationLinks;
