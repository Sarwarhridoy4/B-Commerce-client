import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../../../Assets/logo.png";
import Loading from "../../../../Components/Loading/Loading";
import { AuthContext } from "../../../../Context/UserContext";

const AddCustomer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const { loading } = useContext(AuthContext);
  const handelAddCustomer = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    // console.log(url);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          // console.log(imgData.data.url);
          const task = {
            name: data.name,
            price: data.price,
            img: imgData.data.url,
            description: data.description,
          };
          // console.log(task);
          //   save task to the database
          fetch("https://server-sarwarhridoy4.vercel.app/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(task),
          })
            .then((res) => res.json())
            .then((result) => {
              // console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate(`/dashboard/products`);
            });
        }
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <img className='mx-auto w-24' src={logo} alt='Your Company' />
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            Add A New Product
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(handelAddCustomer)}
          className='mt-8 space-y-6'
          action='#'
          method='POST'
        >
          <div className='-space-y-px rounded-md shadow-sm'>
            <div>
              <label htmlFor='product-name' className='sr-only'>
                Product Name
              </label>
              <input
                id='product-name'
                name='name'
                type='text'
                {...register("name", { required: "Provide Product Name" })}
                autoComplete='name'
                aria-invalid={errors.name ? "true" : "false"}
                className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Product Name'
              />
              {errors.name && (
                <p className='text-red-500 block' role='alert'>
                  {errors.name?.message}
                </p>
              )}
            </div>
            <label
              htmlFor='dropzone-file'
              className='flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-gray-300 dark:text-gray-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12'
                />
              </svg>

              <h2 className='mx-3 text-gray-400'>Photo</h2>

              <input
                id='dropzone-file'
                type='file'
                {...register("image", {
                  required: "Image is Required",
                })}
                className='hidden'
              />
              {errors.img && (
                <p className='text-red-500'>{errors.img.message}</p>
              )}
            </label>

            <div>
              <label htmlFor='product-price' className='sr-only'>
                Product Price
              </label>
              <input
                id='product-price'
                name='price'
                type='text'
                {...register("price", { required: "Provide Product Price" })}
                autoComplete='price'
                aria-invalid={errors.price ? "true" : "false"}
                className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Product Price'
              />
              {errors.price && (
                <p className='text-red-500 block' role='alert'>
                  {errors.price?.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor='product-name' className='sr-only'>
                Product Description
              </label>
              <textarea
                id='product-description'
                name='description'
                type='text'
                {...register("description", {
                  required: "Provide Product Description",
                })}
                autoComplete='description'
                aria-invalid={errors.description ? "true" : "false"}
                className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Describe Your Product'
              />
              {errors.description && (
                <p className='text-red-500 block' role='alert'>
                  {errors.description?.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
