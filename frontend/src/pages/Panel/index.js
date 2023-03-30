import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';
import './panel.css';

function Panel() {

    const[status, setStatus] = useState([]);

    useEffect(() => {

        async function getStatus() {
            let response = await axios.get('/status/lz-get-status')
            .then((response) => response.data)
            .catch((error) => {
                console.log(error);
            })
            console.log(response);
            setStatus(response);
        }
        getStatus();
    }, []);
    console.log(status.status_trash.full);

    return(
        <div>
            <Sidebar/>
            <div className='panel-content'>
                <Title/>
                    {/* {status.map((item) => {
                        return( */}
                            <div className='panel-container'>

                                <div style={{'background':'linear-gradient(45deg, #FF5370, #ff869a)'}} className='box-info'>
                                    <h3>Lixeiras Cheias</h3>
                                    <span>{status.status_trash.full}</span>
                                </div>
                                <div style={{'background':'linear-gradient(45deg, #4099ff, #73b4ff)'}} className='box-info'>
                                    <h3>Lixeiras Medianas</h3>
                                    {/* <span>{status.status_trash.medium}</span> */}
                                </div>
                                <div style={{'background':'linear-gradient(45deg, #38e544, #82f789)'}} className='box-info'>
                                    <h3>Lixeiras Vazias</h3>
                                    {/* <span>{status.status_trash.empty}</span> */}
                                </div>
                            </div>
                    {/* )})}*/}
            </div>
        </div>
    );
}

export default Panel;