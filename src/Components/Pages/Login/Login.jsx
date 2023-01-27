import React, { useContext, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import logo from "../../../Assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import { useForm } from "react-hook-form";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const [loginError, setloginError] = useState("");
  const locaton = useLocation();
  const from = locaton.state?.from?.pathname || "/";

  //Login handel
  const handelLogIn = (data) => {
    setloginError("");
    // console.log(data);
    setloginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success(`${user?.displayName} login Successfully!`);
        // console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setloginError(error.message);
      });
  };

  //google signin
  const handelGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        toast(`authenticated as ${user?.displayName}`);

        const newuser = {
          name: user?.displayName,
          email: user.email,
        };
        // save task to the database
        fetch("https://server-sarwarhridoy4.vercel.app/customers", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newuser),
        })
          .then((res) => res.json())
          .then((result) => {
            // console.log(result);
            toast.success(`${user.displayName} is added successfully`);
            navigate(from, { replace: true } || '/');
          });
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
            Login to Your your account
          </h2>
          <p>Please login with below credential to acces dashboard</p>
          <p>Admin Email: abdur@rahman1.net</p>
          <p>Admin Password: 123456</p>
        </div>
        <form
          onSubmit={handleSubmit(handelLogIn)}
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
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                {...register("password", {
                  required: "Password is required",
                })}
                autoComplete='current-password'
                aria-invalid={errors.password ? "true" : "false"}
                className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Password'
              />
              {errors.password && (
                <p className='text-red-500 block' role='alert'>
                  {errors.password?.message}
                </p>
              )}
              <Link
                to='/register'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Dont Have accout yet?
              </Link>
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
              Sign in
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
            {loginError && toast.error(loginError)}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
