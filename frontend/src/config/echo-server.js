import Echo from "laravel-echo";
window.io = require('socket.io-client');

const echoConnect = (token) => {

    if (token === undefined) {
        throw new Error('Token is not transferred');
    }

    return new Echo({
        broadcaster: 'socket.io',
        host: 'http://localhost:6001',
        auth: {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }
    });

};


export default echoConnect;