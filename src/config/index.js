import axios from "axios";

const $host = axios.create({
    baseURL: process.env.APP_URL,
});

export {
    $host
};