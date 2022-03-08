import React from 'react';
import './about.styles.css';

const About = () => {    
    return (
        <div className='about'>
            <div className='about-left'>
                <div className='about-card bg'></div>
                <div className='about-card'>
                    <img className='about-image' src='https://images.pexels.com/photos/9553909/pexels-photo-9553909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt=''></img>
                </div>
            </div>
            <div className='about-right'>
                <h2 className='about-title'>About me</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste voluptatum alias debitis temporibus, laborum dolor, natus perferendis officia illum qui eos suscipit ipsa ab. Eum iure totam beatae id.</p>
            </div>
        </div>
    )
}

export default About;