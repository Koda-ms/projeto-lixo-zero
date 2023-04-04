import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';
import Header from '../../components/Header'
import map from '../../assets/map.png';
import './analysis.css';

function Analysis() {

    const[status, setStatus] = useState([]);
    const[sensorQtt, setSensorQtt] = useState();

    useEffect(() => {

        async function getStatus() {
            let response = await axios.get('/status/lz-get-status', { 
                headers: {
                    'Ocp-Apim-Subscription-Key': 'fb3b51c48ae843aca4d099c759a732f9'
                }
            })
            .then((response) => response.data)
            .catch((error) => {
                console.log(error);
            })
            // console.log(response);
            setStatus(response.status_trash); 
        }
        getStatus();
    }, []);
    // console.log(status.status_trash.full);

    useEffect(() => {
        async function getSensorQuantity() {
            let response = await axios.get('/status/lz-get-status', { 
                headers: {
                    'Ocp-Apim-Subscription-Key': 'fb3b51c48ae843aca4d099c759a732f9'
                },
                params: {
                    'type': 'raw'
                }
            })
            .then((response) => response.data)
            .catch((error) => {
                console.log(error);
            })
            //console.log(response);
            setSensorQtt(response.sensor_quantity); 
        }
        getSensorQuantity();
    }, []);

    return(
        <div>
            <Header/>
            <Sidebar/>
            <div className='analysis-content'>
                <Title/>

                    <div className='signup-container'>
                        <div className='analysis-box'>
                            <div className='analysis-header'>
                                <h2>Área: Campus UFRPE</h2>
                            </div>

                            <div className='analysis-image'>
                                <img src={map} alt='map'/>
                            </div>
                        </div>
                    </div>

                    <div className='analysis-panel-container'>

                        <div style={{'background':'linear-gradient(45deg, #94abf8, #869ef0'}} className='status-box'>
                            <h2>Status da Área: </h2>
                        </div>

                        <div style={{'background':'linear-gradient(45deg, #FF5370, #ff869a)'}} className='analysis-box-info'>
                            <h3>Lixeiras Cheias</h3>
                            <span>{status.full}</span>
                        </div>
                        <div style={{'background':'linear-gradient(45deg, #4099ff, #73b4ff)'}} className='analysis-box-info'>
                            <h3>Lixeiras Medianas</h3>
                            <span>{status.medium}</span>
                        </div>
                        <div style={{'background':'linear-gradient(45deg, #17ae21, #1bcd27)'}} className='analysis-box-info'>
                            <h3>Lixeiras Vazias</h3>
                            <span>{status.empty}</span>
                        </div>
                    </div>
                    
            </div>
        </div>
    );
}

export default Analysis;