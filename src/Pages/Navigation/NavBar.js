import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import app from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const NavBar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigate("login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginButton = (
    <>
      {user ? (
        <div className='lg:flex'>
          <div className='px-2 py-1 text-left rounded-lg my-3 lg:mx-3 lg:my-0'>
            <p>{user?.displayName}</p>
            <p>{user?.email}</p>
          </div>
          <button onClick={signOutUser} className='lg:btn btn btn-sm'>
            LogOut
          </button>
        </div>
      ) : (
        <Link to='/login' className='lg:btn btn btn-sm'>
          Login
        </Link>
      )}
    </>
  );

  const navItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/blogs'>Blogs</Link>
      </li>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
    </>
  );

  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabindex='0' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabindex='0'
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            {navItems}
            {loginButton}
          </ul>
        </div>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
          Metal House
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>{navItems}</ul>
      </div>
      <div className='navbar-end'>
        <div className='dropdown'>
          <label
            tabindex='1'
            for='dashboardSidebar'
            className='btn btn-ghost lg:hidden'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z' />
            </svg>
            {/* <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg> */}
          </label>
        </div>
        <div className='lg:block hidden'>

          {loginButton}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
