import { Link } from 'react-router-dom';
import smartTrash from './../../assets/smartTrash.png';
import './header.css';

function Header(){

    return(
        <div className='container'>
            <div>
                <img src={smartTrash} alt='logo'/>
            </div>

            <Link to='/'>
                Home
            </Link>
            <Link to='/contact'>
                Contato
            </Link>
            <Link to='/signup'>
                Cadastro
            </Link>
            <button><Link to='/login'>
                <span>Login</span>
            </Link></button>
        </div>
    );
}

export default Header;