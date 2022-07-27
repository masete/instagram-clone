import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/sign-up'));
const PageNotFound = lazy(() => import('./pages/not-found'));
const Dashboard = lazy(()=> import('./pages/dashboard'));

function App() {

  const { user} = useAuthListener();
   
  return (
    <UserContext.Provider value={{user}}>
      <Router>
        <Suspense fallback={<p>Loading .....</p>}>
          <Routes>
            <Route path="*" element={ <PageNotFound /> }/>;

            <Route path={ROUTES.LOGIN} element={ <Login /> }/>;
            <Route path={ROUTES.SIGN_UP} element={ <SignUp /> }/>;
            <Route path={ROUTES.DASHBOARD} element={ <Dashboard /> }/>;
          </Routes>
        </Suspense>

      </Router>
    </UserContext.Provider>
  )
}

export default App;
