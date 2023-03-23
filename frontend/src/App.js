import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Home/> } path='/'/>
        <Route element={ <Login/> } path='/login'/>
        <Route element={ <Signup/> } path='/signup'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
