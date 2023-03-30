import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Panel from './pages/Panel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Home/> } path='/'/>
        <Route element={ <Login/> } path='/login'/>
        <Route element={ <Signup/> } path='/signup'/>
        <Route element={ <Profile/> } path='/profile'/>
        <Route element={ <Panel/> } path='/panel'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
