import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { URL_SIGNUP } from '../utils/urlConstants';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Link from where I come if it exists.
  const from = location.state?.from?.pathname || '/';

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

      const { token } = response.data,
        { user } = response.data.data;

      setAuth({
        user,
        token,
      });

      navigate(from, { replace: true });

      console.log(user);
      console.log(token);

      setEmailInput('');
      setPasswordInput('');
    } catch (err) {
      console.log(err);
      if (!err?.response) setErrMsg('No Server Response');
      else if (err.response?.status === 400)
        setErrMsg('Missing username or password');
      else if (err.response?.status === 401) setErrMsg('Unauthorized');
      else setErrMsg('Login failed');
    }
  };

  return (
    <div className='mx-auto max-w-7xl h-screen p-6'>
      <nav>
        <img src='/vite.svg' alt='' />
      </nav>
      <main>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 max-w-[23rem] w-full p-4 md:max-w-[30rem]'>
          <p className={errMsg !== '' ? 'errMsg' : 'offscreen'}>{errMsg}</p>
          <form
            onSubmit={loginHandler}
            className='flex flex-col gap-4 justify-center items-center'
          >
            <label htmlFor='email' className='absolute'></label>
            <label htmlFor='password' className='absolute'></label>

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
