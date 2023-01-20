import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Pages/Home/Home";
import Error from "../../Components/Shared/Error/Error";
import Main from "../../Layouts/Main/Main"
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    },
])

export default router;