import { getByTitle } from '@testing-library/react';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';
import { doesUserNameExist } from '../services/firebase';

export default function SignUp() {

    const navigate = useNavigate();
    const { firebase } = useContext(FirebaseContext)


    const [username, setUserName] = useState();
    const [fullName, setFullName] = useState();

    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();

    const[error, setError] = useState();
    const isInvalid = password === '' || emailAddress === '';

    useEffect(() => {
        document.title = 'SignUp - Instagram'
    }, [])

    const handleSignUp = async (event) =>{
      event.preventDefault();

      const usernameExists = await doesUserNameExist(username);
      if(usernameExists) {
        try{
          const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password)

          //authentication
          //-> emailAdress & password + username (displayName)
          await createdUserResult.user.updateProfile({
            displayName: username
          });

          //firebase collection, (create a document)
          await firebase.firestore().collection('users').add({
            userId : createdUserResult.user.uid,
            username: username.toLowerCase(),
            fullName,
            emailAddress: emailAddress.toLowerCase(),
            following: [],
            dateCreated: Date.now()
          });

          navigate.push(ROUTES.DASHBOARD)
        } catch (error){
          
        }
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

          <form onSubmit={handleSignUp} method="POST">

          <input
            aria-label="Please enter your username"
            type='text'
            placeholder='Username'
            className='text-sm text-gray-primary w-full mr-3 py-5 px-4 h-2 border 
            border-gray-primary rounded mb-2'
            onChange={({ target })=> setUserName(target.value)}
            value={username}
            />

          <input
            aria-label="Please enter your full Name"
            type='text'
            placeholder='Full-name'
            className='text-sm text-gray-primary w-full mr-3 py-5 px-4 h-2 border 
            border-gray-primary rounded mb-2'
            onChange={({ target })=> setFullName(target.value)}
            value={fullName}
            />
            <input
            aria-label="Please enter your email address"
            type='text'
            placeholder='Email address'
            className='text-sm text-gray-primary w-full mr-3 py-5 px-4 h-2 border 
            border-gray-primary rounded mb-2'
            onChange={({ target })=> setEmailAddress(target.value)}
            value={ emailAddress }
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
              Sign Up
            </button>
          </form>
          </div>
          <div className='flex justify-center items-center flex-col w-full big-white p-4
           border border-gray-primary rounded'>
            <p className='text-sm'> You already have an account?{'  '}
             <Link to={ROUTES.LOGIN} className='font-bold text-blue-medium'>Log In</Link></p>
          </div>
          </div>
         
        </div>
      );
    }
