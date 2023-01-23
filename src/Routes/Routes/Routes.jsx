import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Pages/Home/Home";
import Login from "../../Components/Pages/Login/Login";
import MyCart from "../../Components/Pages/MyCart/MyCart";
import ProductDetailse from "../../Components/Pages/Products/ProductDetailse/ProductDetailse";
import Products from "../../Components/Pages/Products/Products";
import Register from "../../Components/Pages/Register/Register";
import Error from "../../Components/Shared/Error/Error";
import Dashboard from "../../Layouts/Dashboard/Dashboard";
import AllCustomers from "../../Layouts/Dashboard/Pages/AllCustomers/AllCustomers";
import AllOrders from "../../Layouts/Dashboard/Pages/AllOrders/AllOrders";
import AllProducts from "../../Layouts/Dashboard/Pages/AllProducts/AllProducts";
import AddCustomer from "../../Layouts/Dashboard/Pages/AddCustomer/AddCustomer";
import AddProduct from "../../Layouts/Dashboard/Pages/AddProduct/AddProduct";
import Main from "../../Layouts/Main/Main"
import Private from "../Private/Private"

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
            
            {
                path: '/products/:id',
                loader: async ({ params }) => {
                    // console.log(params);
                    return fetch(`http://localhost:5000/products/${params.id}`)
                },
                element: <ProductDetailse></ProductDetailse>
            },
            {
                path: '/orders',
                
                element: <Private><MyCart></MyCart></Private>
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
            {
                path: '/dashboard',
                element:<AllCustomers></AllCustomers>
            },
            {
                path: '/dashboard/customers',
                element:<AllCustomers></AllCustomers>
            },
            {
                path: '/dashboard/orders',
                element:<AllOrders></AllOrders>
            },
            {
                path: '/dashboard/products',
                element:<AllProducts></AllProducts>
            },
            {
                path: '/dashboard/add-customer',
                element:<AddCustomer></AddCustomer>
            },
            {
                path: '/dashboard/add-product',
                element:<AddProduct></AddProduct>
            },
        ]
    },
])

export default router;