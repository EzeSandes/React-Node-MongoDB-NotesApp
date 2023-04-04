import React from 'react';
import { Outlet } from 'react-router-dom';
// import { Link, Outlet } from 'react-router-dom';
// import {
//   URL_ADD_NOTE,
//   URL_EDIT_NOTE,
//   URL_LOGIN,
//   URL_NOTE,
//   URL_NOTES,
//   URL_SIGNUP,
// } from '../utils/urlConstants.js';
import Nav from '../components/Nav.jsx';

const HomeLayout = () => {
  return (
    <>
      {/* <nav className='flex justify-center gap-4'>
        <Link to={URL_NOTES}>Home</Link>
        <Link to={URL_NOTE}>Note</Link>
        <Link to={URL_LOGIN}>Login</Link>
        <Link to={URL_SIGNUP}>Signup</Link>
        <Link to={URL_ADD_NOTE}>add Note</Link>
        <Link to={URL_EDIT_NOTE}>edit Note</Link>
      </nav> */}
      <Nav />
      <h2>Home</h2>
      <main className='md:px-0 mx-auto max-w-6xl'>
        <Outlet />
      </main>
    </>
  );
};

export default HomeLayout;
