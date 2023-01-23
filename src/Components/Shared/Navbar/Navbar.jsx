import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from "../../../Assets/logo.png"
import { AuthContext } from '../../../Context/UserContext';
const Navbar = () => {
  
  
  const { user, logOut } = useContext(AuthContext);

  const handelLogout = () => {
    logOut()
      .then(() => {
        toast.success("User Logged Out");
      })
      .catch((error) => console.log(error));
  };
  //menu-items goes here//
    const menuItems = (
        <React.Fragment>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/Products'>Products</NavLink>
          </li>
          <li>
            <NavLink to={`/orders`}>My Cart</NavLink>
          </li>
          <li>
          {user?<button onClick={()=>handelLogout()} className="btn btn-outline btn-info">LogOut</button>:null}
          </li>
          <li>
            <NavLink to='/dashboard'>Dashboard</NavLink>
          </li>
        </React.Fragment>
      );
    return (
        <div className="navbar bg-green-300">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <NavLink to='/' className=""><img className='w-20' src={logo} alt="logo" /></NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink to='/register' className="btn">Get started</NavLink>
  </div>
</div>
    );
};

export default Navbar;