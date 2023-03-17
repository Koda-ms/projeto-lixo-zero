import Header from '../../components/Header';
import homeIcon from '../../assets/coleta-inteligente.png'
import './home.css';

function Home(){

    return(
        <div>
            <Header/>

            <div className='home-container'>

                <div className='home-content'>
                    <div className='title'>
                        <h1>Limpeza Fácil</h1>
                        <h1>Otimizando a coleta de resíduos</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className='cta'>
                        <button>Cadastre-se</button>
                    </div>
                </div>

                <div className='home-icon'>
                    <img src={homeIcon} alt='home-icon'/>
                </div>

               
            </div>
        </div>
    );
}

export default Home;