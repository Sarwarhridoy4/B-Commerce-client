import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../Context/UserContext";

const ProductDetailse = () => {
  const product = useLoaderData()[0];
  // console.log(product);
  const {user} = useContext(AuthContext);
  const username = user?.displayName;
  const email = user?.email;
  
  
  const navigate = useNavigate()
  //saving user to database
  const saveUserBooking = (username, email, productname, image, price) => {
    const cartInfo = { username, email, productname, image, price };
    // save task to the database
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success(`${productname} is added to cart`);
        navigate('/orders')
      });
  };
  //adding to cart
  const handelAddToCart = () => {
    saveUserBooking(
      username,
      email,
      product?.name,
      product?.img,
      product?.price
    );

  };
  return (
    <div className='card  md:w-4/5 mx-auto bg-base-100 shadow-xl my-10'>
      <figure>
        <img className='min-w-1/2' src={product?.img} alt='Album' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{product?.name}</h2>
        <p>{product?.body}</p>
        <p>
          <strong>Price: $ {product?.price}</strong>
        </p>
        <div className='card-actions justify-end'>
          <button onClick={handelAddToCart} className='btn btn-primary'>
            Add To Cart
          </button>

          <Link to='/'>
            <button className='btn btn-primary text-2xl'>🏡</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailse;
