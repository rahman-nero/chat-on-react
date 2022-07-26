import Echo from "laravel-echo";
window.io = require('socket.io-client');

const echoConnect = (token) => {

    if (token === undefined) {
        throw new Error('Token is empty');
    }

    return new Echo({
        broadcaster: 'socket.io',
        host: process.env.REACT_APP_ECHO_SERVER_URL,
        auth: {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }
    });

};


export default echoConnect;