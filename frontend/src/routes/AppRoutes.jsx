import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom"
import {privateRoutes, publicRoutes} from "./routes";
import {useSelector} from "react-redux";

const AppRoutes = () => {

    const user = useSelector((state) => state );

    // Если пользователь не авторизован
    if (Object.keys(user).length === 0) {
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