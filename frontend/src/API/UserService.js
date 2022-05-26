import {$host} from "../config";

const authorize = (login, password) => {
    return $host.post('/login', {
        login,
        password
    });
};

const check = (token) => {
    return $host.get('/check', {
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    });
}



export {
    check,
    authorize,
}