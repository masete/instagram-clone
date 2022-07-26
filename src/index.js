import { React }from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { firebase, FieldValue } from './lib/firebase';
import FirebaseContext from './context/firebase';
import './styles/app.css'


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
<FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
</FirebaseContext.Provider>);
