import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  URL_ADD_NOTE,
  URL_EDIT_NOTE,
  URL_LOGIN,
  URL_NOTE,
  URL_NOTES,
  URL_SIGNUP,
} from '../utils/urlConstants.js';

const HomeLayout = () => {
  return (
    <>
      <nav className='flex justify-center gap-4'>
        <Link to={URL_NOTES}>Home</Link>
        <Link to={URL_NOTE}>Note</Link>
        <Link to={URL_LOGIN}>Login</Link>
        <Link to={URL_SIGNUP}>Signup</Link>
        <Link to={URL_ADD_NOTE}>add Note</Link>
        <Link to={URL_EDIT_NOTE}>edit Note</Link>
      </nav>
      <h2>Home</h2>
      <Outlet />
    </>
  );
};

export default HomeLayout;
