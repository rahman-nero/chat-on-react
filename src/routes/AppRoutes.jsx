import React from 'react';
import { Routes, Navigation } from "react-router-dom"
import Chats from "../pages/Chats";

const AppRoutes = () => {
    return (
        <div>
            <Routes>

                <Route path="/chats" element={<Chats />} />

                <Route path="*" element={<Navigation to="/chats"/>}></Route>
            </Routes>
        </div>
    );
};

export default AppRoutes;