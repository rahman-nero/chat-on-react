import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./styles/main.css"
import {AuthContext} from "./context/AuthContext";
import {check} from "./API/UserService";
import jwt_decode from "jwt-decode";


const App = () => {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            console.log('Token ', token);

            check(token)
            .then((response) => {
                    setUser(jwt_decode(token));
            }).catch((error) => {
                setUser(false);
            });

        } else {
            console.log('Token is not defined');
        }

    }, []);

    return (<AuthContext.Provider value={{user, setUser}}>
            <BrowserRouter>

                {/* Routes */}
                <AppRoutes/>
            </BrowserRouter>
        </AuthContext.Provider>);
};

export default App;