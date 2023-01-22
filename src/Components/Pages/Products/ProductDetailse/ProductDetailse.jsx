import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetailse = () => {
    const product = useLoaderData()[0];
    console.log(product);
  return (
    <div className='card  md:w-4/5 mx-auto bg-base-100 shadow-xl my-10'>
      <figure>
        <img className="min-w-1/2" src={product?.img} alt='Album' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{product?.name}</h2>
        <p>{product?.body}</p>
        <p><strong>Price: $ {product?.price}</strong></p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailse;
