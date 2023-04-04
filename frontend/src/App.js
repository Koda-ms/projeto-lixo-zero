import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Panel from './pages/Panel';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Home/> } path='/'/>
        <Route element={ <Login/> } path='/login'/>
        <Route element={ <Signup/> } path='/signup'/>
        <Route element={ <Panel/> } path='/panel'/>
        <Route element={ <Contact/> } path='/contact'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
