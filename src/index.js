import React from 'react';
import { createRoot } from 'react-dom/client';
import FirebaseContext from './context/firebase';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>
);
