import './App.css';
import Login from './Login/Login';
import MainContainer from './MainContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import UserProfile from './Profile/UserProfile/UserProfile';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Aos from 'aos';
import 'aos/dist/aos.css'

import Diet from './UI/Diet/Diet';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  const { currentUser } = useContext(AuthContext)
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />
  }
  console.log(currentUser);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainContainer />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<RequireAuth><UserProfile /></RequireAuth>} />
          <Route path='/diet' element={<RequireAuth><Diet /></RequireAuth>} />
          {/* <Route path='/exercises' element={<RequireAuth><RoutinePage /></RequireAuth>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
