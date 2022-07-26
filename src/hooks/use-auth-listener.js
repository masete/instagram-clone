import { useState, useEffect, useContext } from "react";
import FirebaseContext from "../context/firebase";

const useAuthListener = () =>{

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const { firebase } = useContext(FirebaseContext);

    useEffect(()=>{
        const listener = firebase.auth().onAuthStateChanged = (authUser) => {
            //if authUser store in local storgae
            if(authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            } else {

                // we dont have an auth user so we can clean the local storage
                localStorage.removeItem('authUser');
                setUser(null);
            }
        }

        return () => listener();
    }, [firebase]);

    return { user };
};

export default useAuthListener;