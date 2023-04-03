import { Link } from 'react-router-dom';
import { TfiMapAlt, TfiPanel } from 'react-icons/tfi';
import { SlLogout } from 'react-icons/sl';
import profileAvatar from '../../assets/undraw_profile_pic_re_iwgo.svg';
import './sidebar.css';

function Sidebar() {

    return(
        <div className='sidebar'>
            <div>
                <img src={profileAvatar} alt='#'/>
            </div>

            <Link to='/panel'>
                <TfiPanel color='#fff' size={24}/>
                Painel de sensores
            </Link>
            <Link to='/routes'>
                <TfiMapAlt color='#fff' size={24}/>
                Rota de coleta
            </Link>
            <Link to='/'>
                <SlLogout color='#fff' size={24}/>
                Sair
            </Link>
        </div>
    );
}

export default Sidebar;