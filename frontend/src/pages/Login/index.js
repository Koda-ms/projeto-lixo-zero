import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import './login.css';

function Login(){

    return(
        <div>
            <Header/>
        
            <div className='login-container'>
                <div className='login-title'>
                    <h2>Criar conta</h2>
                </div>
                <div className='logo'>
                    <form className='form'>
                        <input type='text' placeholder='Email'/>
                        <input type='password' placeholder='Password' />
                        <button>Sign In</button>
                    </form>
                    <Link to='/signup'>Don't have an account? Sign up here!</Link>
                </div>
            </div>
        </div>
    );

}

export default Login;