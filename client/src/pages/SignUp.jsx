import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { URL_LOGIN } from '../utils/urlConstants';
import axios from '../api/axios';

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,8}$/;
const USER_REGEX = /^[A-z]{3,8}$/;
const EMAIL_REGEX = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [validUsername, setValidUsername] = useState(false);

  const [emailInput, setEmailInput] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  const [passwordInput, setPasswordInput] = useState('');
  const [validPasswordInput, setValidPasswordInput] = useState(false);

  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [validConfirmPasswordInput, setValidConfirmPasswordInput] =
    useState(false);

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  // Validate username
  useEffect(() => {
    const result = USER_REGEX.test(usernameInput);
    setValidUsername(result);
  }, [usernameInput]);

  // Validate email
  useEffect(() => {
    const result = EMAIL_REGEX.test(emailInput);
    setValidEmail(result);
  }, [emailInput]);

  // Validate password && Validate confirm password
  useEffect(() => {
    // const result = PWD_REGEX.test(passwordInput);
    // setValidPasswordInput(result);
    setValidPasswordInput(true);
    const match = passwordInput === confirmPasswordInput;
    setValidConfirmPasswordInput(match);
  }, [passwordInput, confirmPasswordInput]);

  const signUpHandler = async e => {
    e.preventDefault();

    if (
      !validUsername ||
      !validEmail ||
      !validPasswordInput ||
      !validConfirmPasswordInput
    ) {
      console.log('ERROR');
      setError(true);
      return;
    }

    try {
      const response = await axios.post('/api/v1/users/signup', {
        username: usernameInput,
        email: emailInput,
        password: passwordInput,
        passwordConfirm: confirmPasswordInput,
      });

      console.log(response);
      console.log(response.data);
      navigate(URL_LOGIN);
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
          <p
            className={
              (!validUsername ||
                !validEmail ||
                !validPasswordInput ||
                !validConfirmPasswordInput) &&
              error
                ? 'errMsg'
                : 'hide'
            }
          >
            ERROR
          </p>
          <form
            onSubmit={signUpHandler}
            className='flex flex-col gap-4 justify-center items-center'
          >
            <label htmlFor='email' className='absolute'></label>
            <label htmlFor='password' className='absolute'></label>
            <label htmlFor='validate-password' className='absolute'></label>
            <label htmlFor='username' className='absolute'></label>

            <input
              type='text'
              id='username'
              placeholder='Username'
              autoComplete='off'
              onChange={e => setUsernameInput(e.target.value)}
              value={usernameInput}
              className='text-neutral-200 h-12 w-full rounded-md p-2 text-2xl bg-stone-800 placeholder:text-neutral-500 focus:border-neutral-700 focus:border-solid focus:border-2'
            />

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

            <input
              type='password'
              id='validate-password'
              placeholder='Confirm Password'
              autoComplete='off'
              onChange={e => setConfirmPasswordInput(e.target.value)}
              value={confirmPasswordInput}
              className={`text-neutral-200 h-12 w-full rounded-md p-2 text-2xl bg-stone-800 placeholder:text-neutral-500 focus:border-neutral-700 focus:border-solid focus:border-2 ${
                validConfirmPasswordInput ? '' : 'invalid-data'
              }`}
            />

            <button className='bg-slate-100 rounded-sm self-stretch cursor-pointer h-11 font-bold text-neutral-900 text-xl hover:bg-slate-200 transition duration-[0.3s]'>
              Sign up
            </button>
          </form>
          <p className='text-center text-white text-lg '>
            Already have and account?
            <Link
              to={URL_LOGIN}
              className='font-semibold hover:text-slate-300 transition duration-[0.3s]'
            >
              {' '}
              Log In
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
