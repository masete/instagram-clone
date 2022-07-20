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
        <p>This is the login page</p>
    )
};

