import React, {useContext, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import {AuthContext} from "./context/AuthContext";

const App = () => {

    const [isAuth, setIsAuth] = useState(false);

    useContext(() => {
        if (localStorage.getItem('token')) {
            setIsAuth(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>

                {/* Routes */}
                <AppRoutes/>
            </BrowserRouter>

        </AuthContext.Provider>
    );
};

export default App;