import { React, useMemo }from 'react';
// import { createRoot } from 'react-dom/client';
import App from './App';
import { firebase, FieldValue } from './lib/firebase';
import ReactDOM from 'react-dom';
import FirebaseContext from './context/firebase';
import './styles/app.css'

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// const container = document.getElementById('root');
// const root = createRoot(container);
// const FireBaseWrapper = () => {
//   const fireBaseProviderValue = useMemo(() => ({ firebase, FieldValue }), [firebase, FieldValue]);
// return (
//   <FirebaseContext.Provider value={fireBaseProviderValue}>
//     <App />
//   </FirebaseContext.Provider>   
// );
// }

// root.render(<FireBaseWrapper tab="instagram"/>);

// ReactDOM.render(
//   <FirebaseContext.Provider value={{ firebase, FieldValue }}>
//     <App />
//   </FirebaseContext.Provider>,
//   document.getElementById('root')
// );

// ReactDOM.render(<FireBaseWrapper />, document.getElementById('root'));

// const FireBaseWrapper = () => {
//   const fireBaseProviderValue= useMemo(() => ({ firebase, FieldValue }), [firebase, FieldValue]);

// return (<FirebaseContext.Provider value={fireBaseProviderValue}>
//     <App />
//   </FirebaseContext.Provider>)
// }
