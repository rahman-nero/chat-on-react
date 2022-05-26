import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./styles/main.css"
import {AuthContext} from "./context/AuthContext";
import {check} from "./API/UserService";
import jwt_decode from "jwt-decode";


const App = () => {
    const [user, setUser] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function auth() {
        setIsLoading(true);

        const token = localStorage.getItem('token');

        if (token) {
            console.log('Token ', token);
            const response = await check(token);

            if (response.status === 200) {
                setUser(jwt_decode(token));
            } else {
                setUser(false);
            }

            console.log(response);
        } else {
            console.log('Token is not defined');
        }

        setIsLoading(false);
    }

    useEffect(() => {
        auth();
    }, []);


    if (isLoading) {
        return (<h2>Загрузка</h2>)
    }

    return (<AuthContext.Provider value={{user, setUser}}>
            <BrowserRouter>

                {/* Routes */}
                <AppRoutes/>
            </BrowserRouter>
        </AuthContext.Provider>);
};

export default App;