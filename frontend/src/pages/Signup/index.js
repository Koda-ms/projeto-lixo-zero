import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import formLogo from '../../assets/undraw_sign_up_n6im.svg';
import './signup.css';

function Signup(){

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
                                <h2>Cadastre-se</h2>
                            </div>
                            <div className='input-group'>
                                <div className='input-box'>
                                    <input type='text' placeholder='Primeiro nome' required/>
                                </div>
                                <div className='input-box'>
                                    <input type='text' placeholder='Segundo nome' required/>
                                </div>
                                <div className='input-box'>
                                    <input type='text' placeholder='Função' required/>
                                </div>
                                <div className='input-box'>
                                    <input type='text' placeholder='Email' required/>
                                </div>
                                <div className='input-box'>
                                    <input type='password' placeholder='Senha' required/>
                                </div>
                            </div>
                            <div className='signup-btn'>
                                <button>Cadastrar</button>
                            </div>
                        </form>
                        <Link to='/login'>Já possui uma conta? Faça login aqui!</Link>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Signup;