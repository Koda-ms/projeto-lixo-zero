import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';
import './profile.css';

function Profile() {

    return(
        <div>
            <Sidebar/>
            <div className='profile-container'>
                <Title/>
                <div className='profile-content'>

                </div>
            </div>
        </div>
    );
}

export default Profile;