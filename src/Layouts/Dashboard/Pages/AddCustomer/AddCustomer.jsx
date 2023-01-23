import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../../../Assets/logo.png";

const AddCustomer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const handelAddCustomer = (data) => {
    // console.log(data);
    //saving customer to database
    const saveCustomer = (name, email) => {
      const customer = { name, email };
      // save task to the database
      fetch("https://server-sarwarhridoy4.vercel.app/customers", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(customer),
      })
        .then((res) => res.json())
        .then((result) => {
          // console.log(result);
          navigate("/dashboard/customers");
          toast.success(`${name} is added to customer list successfully`);
        });
    };
    saveCustomer(data?.name, data?.email);
  };

  return (
    <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <img className='mx-auto w-24' src={logo} alt='Your Company' />
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            Add A Customer
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
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                {...register("email", { required: "Provide Email" })}
                autoComplete='email'
                aria-invalid={errors.email ? "true" : "false"}
                className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Email address'
              />
              {errors.email && (
                <p className='text-red-500 block' role='alert'>
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Username
              </label>
              <input
                id='name'
                name='name'
                type='text'
                {...register("name", {
                  required: "Name is required",
                })}
                autoComplete='current-name'
                aria-invalid={errors.name ? "true" : "false"}
                className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Enter Customer Name'
              />
              {errors.name && (
                <p className='text-red-500 block' role='alert'>
                  {errors.password?.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
