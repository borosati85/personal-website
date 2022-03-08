import React, { useRef } from 'react';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import emailjs from '@emailjs/browser';
import { ContactContainer, ContactBackground, ContactLeft, ContactRight, ContactWrapper, ContactTitle, ContactInfo, ContactInfoItem, ContactIcon, ContactDescription, ContactText, ContactForm } from './contact.styles';

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
        <ContactContainer>
            <ContactBackground/>
            <ContactWrapper>
                <ContactLeft>
                    <ContactTitle>Get in touch</ContactTitle>
                    <ContactInfo>
                        <ContactInfoItem>
                            <ContactIcon src={Phone} alt=''/>+36 50 106 4146
                        </ContactInfoItem>
                        <ContactInfoItem>
                            <ContactIcon src={Email} alt=''/>boros.attila.tamas@gmail.com
                        </ContactInfoItem>
                    </ContactInfo>
                </ContactLeft>
                <ContactRight>
                    <ContactDescription>
                        <ContactText><b>Leave me a message</b></ContactText>
                        <ContactText>I'm open for job possibilities if the right project/company comes along. I'll reply every message as soon as possible. Even if you have a hobby project that you need some help with, feel free to contact me.</ContactText>
                    </ContactDescription>
                    <ContactForm ref={formRef} onSubmit={handleSubmit}>
                        <input type='text' placeholder='Name' name='user_name'></input>
                        <input type='text' placeholder='Subject' name='user_subject'></input>
                        <input type='email' placeholder='Email' name='user_email'></input>
                        <textarea rows="5" name='message'></textarea>
                        <button>Submit</button>
                    </ContactForm>
                </ContactRight>            
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact;