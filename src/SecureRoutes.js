import { useEffect } from "react";

import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

export const SecureRoutes = () => {
    const nav = useNavigate();

    const isAuth = useSelector((state) => state.user.isAuthenticated);

    useEffect(() => {
        isAuth ? nav('/chat'): nav('/login');
        
      },[isAuth, nav])

};
