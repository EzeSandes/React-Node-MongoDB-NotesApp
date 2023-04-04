import React from 'react';

const Nav = () => {
  return (
    <nav className='mx-auto max-w-6xl flex justify-between gap-2 md:gap-3 items-center p-6 flex-wrap'>
      <img src='./vite.svg' alt='Logo' />
      <p className='text-white'>Welcome back Email</p>
      <button className='bg-white' onClick={e => e.preventDefault()}>
        LOG OUT
      </button>
    </nav>
  );
};

export default Nav;
