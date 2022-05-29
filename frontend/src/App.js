import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./styles/main.css"
import {check} from "./API/UserService";
import jwt_decode from "jwt-decode";
import {useDispatch} from "react-redux";
import Loader from "./components/UI/loader/Loader";


const App = () => {

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    async function auth() {
        setIsLoading(true);
        const token = localStorage.getItem('token');

        if (token) {
            console.log('Token ', token);

            try {
                const response = await check(token);
                console.log('Ответ от запроса: ' + response);
                if (response.status === 200) {
                    dispatch({type: 'SET_USER', payload: jwt_decode(token)});
                }
            } catch (error) {
                console.log('Ошибка во время выполнения запроса: ' + error.message);

                dispatch({type: 'SET_USER', payload: {}});
                localStorage.removeItem('token');
            }

        } else {
            console.log('Token is not defined');
        }

        setIsLoading(false);
    }

    useEffect(() => {
        auth();
    }, []);


    if (isLoading) {
        return (<Loader />)
    }

    return (
        <BrowserRouter>

            {/* Routes */}
            <AppRoutes/>
        </BrowserRouter>
    );
};

export default App;