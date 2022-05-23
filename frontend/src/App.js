import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./styles/main.css"
import {AuthContext} from "./context/AuthContext";
import axios from "axios";

const App = () => {

    const [isAuth, setIsAuth] = useState(false);

    useContext(() => {
        if (localStorage.getItem('token')) {
            setIsAuth(true);
        }
    }, []);

    function a() {

    }

    useEffect(() => {

       axios.get('api')
           .then((response) => {
           console.log(response);
       });

    },[]);


    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            <BrowserRouter>

                {/* Routes */}
                <AppRoutes/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default App;