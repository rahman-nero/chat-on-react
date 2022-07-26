import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";


export const privateRoutes = [
    {path: '/chats', element: <Main/>},
    {path: '/chats/:id', element: <Main/>}
];


export const publicRoutes = [
    {path: '/login', element: <Login/>},
    {path: '/register', element: <Register/>},
];