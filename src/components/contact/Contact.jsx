import React from 'react'
import './contact.css'
import {ImMail} from 'react-icons/im'
import {FaFacebookMessenger} from 'react-icons/fa'
import {FaWhatsappSquare} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0pajtcs', 'template_l01tka4', form.current, 'SheQ3X4wbxO4FxDla')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
   <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__options"> 
      <article className="contact__option">
        <ImMail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>amirandersonjones@gmail.com</h5>
        <a href= "mailto:amirandersonjones@gmail.com" target="_blank">Send A Message</a>
      </article>
      <article className="contact__option">
        <FaFacebookMessenger className='contact__option-icon'/>
        <h4>Messanger</h4>
        <h5>Facebookmessanger</h5>
        <a href= "https://m.me/AmirCodes" target="_blank">Send A Message</a>
      </article>
      <article className="contact__option">
        <FaWhatsappSquare className='contact__option-icon'/>
        <h4>WhatsApp</h4>
        <h5>+2245678907</h5>
        <a href= "https://api.whatsapp.com/send?phone+4566787890" target="_blank">Send A Message</a>
      </article>
      </div>
      {/* END OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Please type your Full Name' required />
        <input type="email" name='email' placeholder='Please enter your email' required />
        <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
        <button type ="submit" className='btn btn-primary'>Submit</button>
      </form>
    </div>

    </section>
  )
}

export default Contact