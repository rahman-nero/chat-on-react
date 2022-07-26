import Chats from "../pages/Chats";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Chat from "../pages/Chat";


export const privateRoutes = [
    {path: '/chats', element: <Chats/>},
    {path: '/chats/:id', element: <Chats/>}
];


export const publicRoutes = [
    {path: '/login', element: <Login/>},
    {path: '/register', element: <Register/>},
];