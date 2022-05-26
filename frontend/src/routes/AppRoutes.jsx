import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom"
import {AuthContext} from "../context/AuthContext";
import {privateRoutes, publicRoutes} from "./routes";

const AppRoutes = () => {

    const {user} = useContext(AuthContext);

    // Если пользователь не авторизован
    if (!user) {
        return (
            <Routes>
                {publicRoutes.map((e) => <Route key={e.path} path={e.path} element={e.element}></Route>)}

                <Route path="*" element={<Navigate to="/login"/>}></Route>
            </Routes>
        )
    }

    // Если пользователь авторизован
    return (
        <Routes>
            {privateRoutes.map((e) => <Route key={e.path} path={e.path} element={e.element}></Route>)}

            <Route path="*" element={<Navigate to="/chats"/>}></Route>
        </Routes>
    );
};

export default AppRoutes;