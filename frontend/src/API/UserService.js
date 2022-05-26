import {$authHost, $host} from "../config";

export const authorize = async (login, password) => {
    return await $host.post('/login', {
        login,
        password
    });
};

export const check = async (token) => {
    return await $host.get('/check', {
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    });
}

export const example = async () => {
    return await $authHost.get('/example');
}
