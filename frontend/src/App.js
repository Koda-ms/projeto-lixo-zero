import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Home/> } path='/'/>
        <Route element={ <Login/> } path='/login'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
