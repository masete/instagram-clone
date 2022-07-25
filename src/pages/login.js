import { getByTitle } from '@testing-library/react';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes'

export default function Login() {

    const navigate = useNavigate();
    const { firebase } = useContext(FirebaseContext)

    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();

    const[error, setError] = useState();
    const isInvalid = password === '' || emailAddress === '';

    useEffect(() => {
        document.title = 'Login - Instagram'
    }, [])

    const handleLogin = async (event) =>{
      event.preventDefault();

      try {
        await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
        navigate(ROUTES.DASHBOARD)
      } catch (error) {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      }
    }

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
          <div className="flex w-3/5">
            <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
          </div>

          <div className='flex flex-col w-2/5'>
            <div className='flex flex-col bg-white p-4 border border-gray-primary rounded'>
            <h1 className='flex justify-center w-full'>
            <img src='images/logo.png' alt='instagram logo' className='mt-2 w-6/12 mb-4' />
            {error && <p className='mb-4 text-xs text-red-primary'>{error}</p>}
          </h1>

          <form onSubmit={handleLogin} method="POST">

            <input
            aria-label="Please enter your email address"
            type='text'
            placeholder='Email address'
            className='text-sm text-gray-primary w-full mr-3 py-5 px-4 h-2 border 
            border-gray-primary rounded mb-2'
            onChange={({ target })=> setEmailAddress(target.value)}
            value={emailAddress}
            />

            <input
            aria-label="Please enter your password"
            type='password'
            placeholder='Password'
            className='text-sm text-gray-primary w-full mr-3 py-5 px-4 h-2 border 
            border-gray-primary rounded mb-2'
            onChange={({ target })=> setPassword(target.value)}
            value={password}
            />

            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold
            ${isInvalid && 'opacity-50'}`}
            >
              Login
            </button>
          </form>
          </div>
          <div className='flex justify-center items-center flex-col w-full big-white p-4
           border border-gray-primary rounded'>
            <p className='text-sm'> I don't have an account?{'  '}
             <Link to={ROUTES.SIGN_UP} className='font-bold text-blue-medium'>Sign Up</Link></p>
          </div>
          </div>
         
        </div>
      );
    }
