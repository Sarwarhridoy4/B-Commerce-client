import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Pages/Home/Home";
import Login from "../../Components/Pages/Login/Login";
import ProductDetailse from "../../Components/Pages/Products/ProductDetailse/ProductDetailse";
import Products from "../../Components/Pages/Products/Products";
import Register from "../../Components/Pages/Register/Register";
import Error from "../../Components/Shared/Error/Error";
import Dashboard from "../../Layouts/Dashboard/Dashboard";
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
            {
                path: '/products',
                element: <Products></Products>
            },
            // {
            //     path: '/product/:id',
            //     loader: async ({ params }) =>fetch(`http://localhost:5000/product/${params.id}`),
            //     element: <ProductDetailse></ProductDetailse>
            // },
            {
                path: '/products/:id',
                loader: async ({ params }) => {
                    // console.log(params);
                    return fetch(`http://localhost:5000/products/${params.id}`)
                },
                element: <ProductDetailse></ProductDetailse>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>, 
        errorElement: <Error></Error>,
        children: [
            
            
        ]
    },
])

export default router;