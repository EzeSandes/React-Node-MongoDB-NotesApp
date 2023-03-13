import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { URL_SIGNUP } from '../utils/urlConstants';

const Login = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const navigate = useNavigate();

  const loginHandler = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        '/api/v1/users/login',
        {
          email: emailInput,
          password: passwordInput,
        },
        {
          withCredentials: true,
          credentials: 'include',
        }
      );

      console.log(response);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='mx-auto max-w-7xl h-screen p-6'>
      <nav>
        <img src='/vite.svg' alt='' />
      </nav>
      <main>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 max-w-[23rem] w-full p-4 md:max-w-[30rem]'>
          <form
            onSubmit={loginHandler}
            className='flex flex-col gap-4 justify-center items-center'
          >
            <label htmlFor='email'></label>
            <label htmlFor='password'></label>

            <input
              type='email'
              id='email'
              placeholder='Email'
              autoComplete='off'
              onChange={e => setEmailInput(e.target.value)}
              value={emailInput}
              className='text-neutral-200 h-12 w-full rounded-md p-2 text-2xl bg-stone-800 placeholder:text-neutral-500 focus:border-neutral-700 focus:border-solid focus:border-2'
            />

            <input
              type='password'
              id='password'
              placeholder='Password'
              autoComplete='off'
              onChange={e => setPasswordInput(e.target.value)}
              value={passwordInput}
              className='text-neutral-200 h-12 w-full rounded-md p-2 text-2xl bg-stone-800 placeholder:text-neutral-500 focus:border-neutral-700 focus:border-solid focus:border-2'
            />

            <button className='bg-slate-100 rounded-sm self-stretch cursor-pointer h-11 font-bold text-neutral-900 text-xl hover:bg-slate-200 transition duration-[0.3s]'>
              Log in
            </button>
          </form>
          <p className='text-center text-white text-lg '>
            No Account?
            <Link
              to={URL_SIGNUP}
              className='font-semibold hover:text-slate-300 transition duration-[0.3s]'
            >
              {' '}
              Create one
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
