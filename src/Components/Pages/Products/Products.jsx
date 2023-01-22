import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/products").then((data) => {
      const products = data.data;
        setProducts(products);
        // console.log(products);
    });
  }, []);
    return (
        <div>
            <h4 className='text-4xl mt-3'>Our Fresh products</h4>
            <div className='w-[80vw] mx-auto grid gap-8 my-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products?.map((product,i)=><Product key={i} product ={product}></Product>)
            }
            </div>
        </div>
    );
};

export default Products;