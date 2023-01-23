import React, { useContext, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import logo from "../../../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from "../../../Context/UserContext";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signUpError, setSignUPError] = useState("");
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  //saving user to database
  const saveUser = (name, email) => {
    const user = { name, email };
    // save task to the database
    fetch("https://server-sarwarhridoy4.vercel.app/customers", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success(`${name} is added successfully`);
      });
  };

  //user sign up
  const handelSignUp = (data) => {
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Created Successfully.");
        const userInfo = {
          displayName: data.username,
        };
        console.log(userInfo);
        updateUser(userInfo)
          .then(() => {
            saveUser(data.username, data.email);
            navigate("/");
            // toast('inside update user');
          })
          .catch((err) => console.log(err));
      })

      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });
  };

  //google signin
  const handelGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        saveUser(user?.displayName, user?.email);
        console.log(user);
        toast(`authenticated as ${user?.displayName}`);
        navigate("/");
      })

      .catch((error) => {
        console.error(error.message);
        toast(error.message);
      });
  };

  return (
    <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <img className='mx-auto w-24' src={logo} alt='Your Company' />
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            Register Your your account
          </h2>
        </div>
        <form onSubmit={handleSubmit(handelSignUp)} className='mt-8 space-y-6'>
          <div className='-space-y-px rounded-md shadow-sm'>
            <div>
              <label htmlFor='user-name' className='sr-only'>
                User Name
              </label>
              <input
                id='user-name'
                name='username'
                type='text'
                {...register("username", { required: "Provide username" })}
                autoComplete='username'
                aria-invalid={errors.username ? "true" : "false"}
                className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='User Name'
              />
              {errors.username && (
                <p className='text-red-600 block' role='alert'>
                  {errors.username?.message}
                </p>
              )}
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  {...register("email", { required: "Provide email" })}
                  aria-invalid={errors.email ? "true" : "false"}
                  className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='Email address'
                />
                {errors.email && (
                  <p className='text-red-600 block' role='alert'>
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  {...register("password", {
                    required: "Provide correct password",
                  })}
                  autoComplete='current-password'
                  aria-invalid={errors.password ? "true" : "false"}
                  className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='Password'
                />
                {errors.password && (
                  <p className='text-red-600 block' role='alert'>
                    {errors.password?.message}
                  </p>
                )}
                <Link
                  to='/login'
                  className='font-medium text-indigo-600 hover:text-indigo-500'
                >
                  Already have an account?
                </Link>
                {signUpError && toast.error(signUpError)}
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <LockClosedIcon
                    className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                    aria-hidden='true'
                  />
                </span>
                Register
              </button>
              <button
                onClick={handelGoogleSignIn}
                type='button'
                className='mt-5 group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <LockClosedIcon
                    className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                    aria-hidden='true'
                  />
                </span>
                Google
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
