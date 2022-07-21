import { getByTitle } from '@testing-library/react';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/firebase';

export default function Login() {

    const navigate = useNavigate();
    const { firebase } = useContext(FirebaseContext)

    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();

    const[error, setError] = useState();
    const IsInvalid = password === "" || emailAddress === "";

    useEffect(() => {
        document.title = 'Login - Instagram'
    }, [])

    const handleLogin = () =>{

    }

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
          <div className="flex w-3/5">
            <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
          </div>
          <div className='flex flex-col w-2/5'>
            <h1 className='flex justify-center w-full'>
            <img src='images/logo.png' alt='instagram logo' className='mt-2 w-6/12 mb-4' />
            {error && <p className='mb-4 text-xs text-red-primary'>{error}</p>}
          </h1>

          <form className='onSubmit={handleLogin} method="POST"'>
            <input
            aria-label="Please enter your email address"
            type='text'
            placeholder='Email address'
            className='text-sm text-gray-primary'/>
          </form>
          </div>
         
        </div>
      );
    }
