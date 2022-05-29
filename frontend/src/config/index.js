import axios from "axios";

const $host = axios.create({
    baseURL: 'http://localhost:8080/api',
});

const $authHost = axios.create({
    baseURL: 'http://localhost:8080/api',
});


// При каждом запросе GET, будет вызываться этот метод
const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
