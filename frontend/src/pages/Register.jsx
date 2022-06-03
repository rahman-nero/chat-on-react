import React, {useContext, useState} from 'react';
import cl from "../styles/Login.module.css";
import {Link} from "react-router-dom";
import AlertError from "../components/UI/alerts/error/AlertError";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../API/UserService";
import jwt_decode from "jwt-decode";

const Register = () => {
    const dispatch = useDispatch();

    const [data, setData] = useState({login: '', email: '', password: ''});
    const [error, setError] = useState('');
    const [visible, setVisible] = useState(false);

    const registerHandler = (e) => {
        e.preventDefault();
        setVisible(false) && setError('');

        // Валидация
        if (data.login === '' || data.password === '' || data.email === '') {
            setError('Пожалуйста заполните форму регистраций');
            setVisible(true);
            return;
        }

        // Регистрация
        register(data.login, data.email, data.password)
        .then((response) => {
            const data = response.data;

            if (response.status === 200) {
                localStorage.setItem('token', data.access_token);
                dispatch({type: 'SET_USER', payload: jwt_decode(data.access_token)});

                console.log(response, data);
                return;
            }

            setError('При регистрации вышла ошибка: ' + error.response.data.message);
            setVisible(true);

        })
        .catch((error) => {

            setError('При регистрации вышла ошибка: ' + error.response.data.message);
            setVisible(true);

            console.log(error)
        });

    }

    return (
        <div>
            <div className={cl.login_container}>
                <form>
                    <h1 className={cl.header}>Регистрация</h1>

                    <div className={cl.form_block}>
                        <label htmlFor="username">Логин</label>
                        <input value={data.login}
                               onChange={(e) => setData({...data, login: e.target.value})}
                               type="text"
                               required
                               id="username"
                               placeholder="Логин"/>
                    </div>

                    <div className={cl.form_block}>
                        <label htmlFor="email">Электронная почта</label>
                        <input value={data.email}
                               onChange={(e) => setData({...data, email: e.target.value})}
                               type="email"
                               required
                               id="email"
                               placeholder="Электронная почта"/>
                    </div>

                    <div className={cl.form_block}>
                        <label htmlFor="password">Пароль</label>
                        <input value={data.password}
                               onChange={(e) => setData({...data, password: e.target.value})}
                               type="password"
                               required
                               id="password"
                               placeholder="Пароль"/>
                    </div>

                    <div className={cl.caption}>Есть аккаунт? <Link to="/login"
                                                                     className={cl.register_button}>Вход</Link>
                    </div>

                    <button className={cl.login_button} onClick={registerHandler}>Регистрация</button>
                </form>
            </div>


            {error &&
                <AlertError visible={visible} setVisible={setVisible} timeout="3000">{error}</AlertError>
            }
        </div>
    );

};

export default Register;