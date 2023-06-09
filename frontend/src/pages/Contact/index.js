import Header from '../../components/Header';
import formLogoContact from '../../assets/undraw-contact.svg';
import './contact.css';

function Contact(){

    return(
        <div>
            <Header/>

            <div className='signup-container'>
                <div className='signup-content'>
                    <div className='signup-image'>
                        <img src={formLogoContact} alt='form-logo'/>
                    </div>
                    <div className='form-box'>
                        <form className='form-content'>
                            <div className='form-header'>
                                <h2>Envie uma mensagem</h2>
                            </div>
                            <div className='input-group'>
                                <div className='input-box'>
                                    <input type='text' placeholder='Seu nome' required/>
                                </div>
                                <div className='input-box'>
                                    <input type='text' placeholder = 'Empresa'/>
                                </div>
                                <div className='input-box'>
                                    <input type='text' placeholder='E-mail' required/>
                                </div>
                                <div className='input-box'>
                                    <input type='text' placeholder='Assunto' required/>
                                </div>
                                <div className='input-msg-box'>
                                    <textarea type='text' placeholder='Escreva sua mensagem' required/>
                                </div>
                            </div>
                            <div className='signup-btn'>
                                <button>Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Contact;