import Header from '../../components/Header';
import formLogoContact from '../../assets/undraw-contact.svg';
import './contact.css';

function Contact(){

    return(
        <div>
            <Header/>

            <div className='contact-container'>
                <div className='contact-content'>
                    <div className='contact-image'>
                        <img src={formLogoContact} alt='form-logo-contact'/>
                    </div>
                    <div className='contact-form-box'>
                        <form className='contact-form-content'>
                            <div className='contact-form-header'>
                                <h2>Envie uma mensagem</h2>
                            </div>
                            <div className='input-group'>
                                <div className='input-box-contact'>
                                    <input type='text' placeholder='Seu nome' required/>
                                </div>
                                <div className='input-box-contact'>
                                    <input type='text' placeholder = 'Empresa'/>
                                </div>
                                <div className='input-box-contact'>
                                    <input type='text' placeholder='E-mail' required/>
                                </div>
                                <div className='input-box-contact'>
                                    <input type='text' placeholder='Assunto' required/>
                                </div>
                                <div className='textarea-box-contact'>
                                    <textarea type='text' placeholder='Escreva sua mensagem' required/>
                                </div>
                            </div>
                            <div className='contact-btn'>
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