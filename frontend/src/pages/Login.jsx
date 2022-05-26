import React, {useContext, useState} from 'react';
import cl from "../styles/Login.module.css"
import {Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import jwt_decode from "jwt-decode"
import AlertError from "../components/UI/alerts/error/AlertError";
import {authorize} from "../API/UserService";

const Login = () => {

    const {setUser} = useContext(AuthContext);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const [visible, setVisible] = useState(false);

    const loginHandler = (e) => {
        e.preventDefault();
        setError(false) && setVisible(false)

        authorize(login, password)
        .then((response) => {
            const data = response.data;

            console.log(jwt_decode(data.access_token));

            localStorage.setItem('token', data.access_token);
            setUser(jwt_decode(data.access_token));

        }).catch((error) => {
            setError('Произошла ошибка при входе: ' + error.message);
            setVisible(true);
        });
    }

    return (
        <div>
            <div className={cl.login_container}>
                <form action="frontend/src/pages/Login">
                    <h1 className={cl.header}>Вход</h1>


                    <div className={cl.form_block}>
                        <label htmlFor="username">Логин</label>
                        <input value={login} onChange={(e) => setLogin(e.target.value)} type="text" id="username"
                               placeholder="Логин"/>
                    </div>

                    <div className={cl.form_block}>

                        <label htmlFor="password">Пароль</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"
                               id="password"
                               placeholder="Пароль"/>
                    </div>

                    <div className={cl.forget_password}><Link to="/login/forget">Забыли пароль?</Link></div>

                    <p>Нет аккаунта? <Link to="/register" className={cl.register_button}>Регистрация</Link></p>

                    <button className={cl.login_button} onClick={loginHandler}>Войти</button>
                </form>
            </div>

            {error &&
                <AlertError visible={visible} setVisible={setVisible} timeout="3000">{error}</AlertError>
            }
        </div>
    );

};

export default Login;