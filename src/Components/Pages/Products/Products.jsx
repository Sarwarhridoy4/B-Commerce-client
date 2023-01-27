import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/UserContext";
import Loading from "../../Loading/Loading";
import Product from "./Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { loading,setLoading } = useContext(AuthContext);
  useEffect(() => {
    setLoading(true)
    axios
      .get("https://server-sarwarhridoy4.vercel.app/products")
      .then((data) => {
        const products = data.data;
        setProducts(products);
        setLoading(false)
        // console.log(products);
      });
  }, [setLoading]);
  
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h4 className='text-4xl mt-3'>Our Fresh products</h4>
      <div className='w-[80vw] mx-auto grid gap-8 my-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {products?.map((product, i) => (
          <Product key={i} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
