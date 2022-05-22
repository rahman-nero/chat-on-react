import Chats from "../pages/Chats";
import Login from "../pages/Login";
import Register from "../pages/Register";


export const privateRoutes = [
    {path: '/chats', element: <Chats/>},
];


export const publicRoutes = [
    {path: '/login', element: <Login/>},
    {path: '/register', element: <Register/>},
];