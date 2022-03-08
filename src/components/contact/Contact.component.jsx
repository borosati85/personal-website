import React, { useRef } from 'react';
import './contact.styles.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const formRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();

        emailjs.sendForm('service_o87fd5o', 'template_2osshgr', formRef.current, 'ORS6nvw8z6wahaGhq')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className='contact'>
            <div className='contact-bg'></div>
            <div className='contact-wrapper'>
                <div className='contact-left'>
                    <h2 className='contact-title'>Get in touch</h2>
                    <div className='contact-info'>
                        <div className='contact-info-item'>
                            <img className='contact-icon' src={Phone} alt=''/>+36 50 106 4146
                        </div>
                        <div className='contact-info-item'>
                            <img className='contact-icon' src={Email} alt=''/>boros.attila.tamas@gmail.com
                        </div>
                    </div>
                </div>
                <div className='contact-right'>
                    <div className='contact-description'>
                        <p><b>Leave me a message</b></p>
                        <p>Got a project idea and need some help? Feel free to leave me a message. I'm open for job possibilities if the right project/company comes along. I'll reply every message as soon as possible.</p>
                    </div>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type='text' placeholder='Name' name='user_name'></input>
                        <input type='text' placeholder='Subject' name='user_subject'></input>
                        <input type='email' placeholder='Email' name='user_email'></input>
                        <textarea rows="5" name='message'></textarea>
                        <button>Submit</button>
                    </form>
                </div>            
            </div>
        </div>
    )
}

export default Contact;