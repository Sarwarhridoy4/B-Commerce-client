import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/UserContext';

const MyCart = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const[data,setdata] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user?.email}`)
            .then(res => res.json())
        .then(data=>setdata(data))
    }, [user?.email])
console.log(data);
    return (
        <div>
            <p>My cart items here</p>
        </div>
    );
};

export default MyCart;