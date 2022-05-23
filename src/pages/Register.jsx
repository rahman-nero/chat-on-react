import React, {useContext, useState} from 'react';
import {AuthContext} from "../context/AuthContext";
import cl from "../styles/Login.module.css";
import {Link} from "react-router-dom";
import AlertError from "../components/UI/alerts/error/AlertError";

const Register = () => {

    const {setIsAuth} = useContext(AuthContext);

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const [visible, setVisible] = useState(false);

    const registerHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <div className={cl.login_container}>
                <form>
                    <h1 className={cl.header}>Регистрация</h1>

                    <div className={cl.form_block}>
                        <label htmlFor="username">Логин</label>
                        <input value={login} onChange={(e) => setLogin(e.target.value)} type="text" required
                               id="username"
                               placeholder="Логин"/>
                    </div>

                    <div className={cl.form_block}>
                        <label htmlFor="username">Электронная почта</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required
                               id="username"
                               placeholder="Электронная почта"/>
                    </div>

                    <div className={cl.form_block}>
                        <label htmlFor="password">Пароль</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required
                               id="password"
                               placeholder="Пароль"/>
                    </div>

                    <p>Есть аккаунта? <Link to="/login" className={cl.register_button}>Регистрация</Link></p>

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