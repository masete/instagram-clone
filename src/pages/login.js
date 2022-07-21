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
          <p>i have no idea</p>
          {/* <div className="w-3/5 h-12">
            <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
          </div>
          <div className='w-2/5 h-12'>
            <p>I will be the form .......</p>
          </div> */}
        </div>
      );
    }
