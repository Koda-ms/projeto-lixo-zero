import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import formLogo from '../../assets/undraw_login_re_4vu2.svg';
import './login.css';

function Login(){

    return(
        <div>
            <Header/>
        
            <div className='signup-container'>
                <div className='signup-content'>
                    <div className='signup-image'>
                        <img src={formLogo} alt='form-logo'/>
                    </div>
                    <div className='form-box'>
                        <form className='form-content'>
                            <div className='form-header'>
                                <h2>Acessar conta</h2>
                            </div>
                            <div className='input-group'>
                                <div className='input-box-login'>
                                    <input type='text' placeholder='Email' required/>
                                </div>
                                <div className='input-box-login'>
                                    <input type='password' placeholder='Senha' required/>
                                </div>
                            </div>
                            <div className='signup-btn'>
                                <button>Entrar</button>
                            </div>
                        </form>
                        <Link to='/signup'>Não possui uma conta? Crie uma aqui!</Link>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Login;