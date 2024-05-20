import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoutes = ({ child }) => {
    const token = localStorage.getItem("currentUserToken");
    const location = useLocation();

    if (!token && location.pathname !== "/inbox") {
        return <Navigate to="/home" />;
    }

    return <>{token ? child : <Navigate to="/home" />}</>;
};

export default ProtectedRoutes;