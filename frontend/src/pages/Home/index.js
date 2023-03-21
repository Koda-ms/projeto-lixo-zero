import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import Header from '../../components/Header';
import homeIcon from '../../assets/coleta-inteligente.png';
import aboutBackgroung from '../../assets/about-us-sec.png'
import './home.css';

function Home(){

    return(
        <div>
            <Header/>

            {/* MAIN SECTION */}
            <div className='home-container'>
                <div className='home-content'>
                    <div className='title'>
                        <h1>Limpeza Fácil</h1>
                        <h1>Otimizando a coleta de resíduos</h1>
                        <p>A solução para aprimorar o desempenho da limpeza e administrar rotas de coleta<br/>por meio de sensores e coletividade.</p>
                    </div>
                    <div className='cta'>
                        <button>Cadastre-se</button>
                    </div>
                </div>

                <div className='home-icon'>
                    <img src={homeIcon} alt='home-icon'/>
                </div>
            </div>

            {/* FEATURES SECTION */}
            <div className='box'>
                <div className='resources-sec'>
                    <h2>Nossos recursos</h2>
                </div>
                <ul>
                    <li>
                        <strong>Monitoramento de lixeiras</strong>
                        <p>Com o auxílio de sensores conseguimos monitorar e verificar se as lixeira encontram-se cheias. Prontas para esvaziar!</p>
                    </li>
                    <li>
                        <strong>Gerenciamento de rotas</strong>
                        <p>Com o auxílio de sensores conseguimos monitorar e verificar se as lixeira encontram-se cheias. Prontas para esvaziar!</p>
                    </li>
                    <li>
                        <strong>Interação com a comunidade</strong>
                        <p>Com o auxílio de sensores conseguimos monitorar e verificar se as lixeira encontram-se cheias. Prontas para esvaziar!</p>
                        </li>
                    <li>
                        <strong>Notificação em tempo real</strong>
                        <p>Com o auxílio de sensores conseguimos monitorar e verificar se as lixeira encontram-se cheias. Prontas para esvaziar!</p>
                    </li>
                    <li>
                        <strong>Integração com outras APIs</strong>
                        <p>Com o auxílio de sensores conseguimos monitorar e verificar se as lixeira encontram-se cheias. Prontas para esvaziar!</p>
                    </li>
                    <li>
                        <strong>Painel de controle</strong>
                        <p>Com o auxílio de sensores conseguimos monitorar e verificar se as lixeira encontram-se cheias. Prontas para esvaziar!</p>    
                    </li>
                </ul>
            </div>

            {/* ABOUT SECTION */}
            <div className='about-sec-container'>
                <div className='about-sec-content'>
                    <div className='about-sec-title'>
                        <h2>Sobre nós</h2>
                    </div>
            
                    <div className='description-text'>
                        <p>Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the 
                            industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and 
                            scrambled it to make a type specimen book.<br/>
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry.<br/>
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry.</p>
                        <div className='social-media'>
                            <a href='*' >
                                <AiFillInstagram color='black' size={20}/>
                                @limpeza_facil
                            </a>
                            <a href='*' >
                                <AiFillLinkedin color='black' size={20}/>
                                Limpeza Fácil
                            </a>
                        </div>
                    </div>
                </div>
                <div className='img-section'>
                    <img src={aboutBackgroung} alt='about-us'/>
                </div>
            </div>
        </div>
    );
}

export default Home;