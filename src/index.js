import { useMemo, React } from 'react';
// import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { firebase, FieldValue } from './lib/firebase';
import FirebaseContext from './context/firebase';

// ReactDOM.render(
//   <FirebaseContext.Provider value={{ firebase, FieldValue }}>
//     <App />
//   </FirebaseContext.Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(<FireBaseWrapper />, document.getElementById('root'));

const FireBaseWrapper = () => {
  const fireBaseProviderValue= useMemo(() => ({ firebase, FieldValue }), [firebase, FieldValue]);

return (<FirebaseContext.Provider value={fireBaseProviderValue}>
    <App />
  </FirebaseContext.Provider>)
}
