import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {GrTwitter} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
    <a href="#" className='footer__logo'>AmirCodes</a>

    <ul className='permalinks'>
    <li><a href='#'>Home</a></li>
    <li><a href='#about'>About</a></li>
    <li><a href='#experience'>Experience</a></li>
    <li><a href='#services'>Services</a></li>
    <li><a href='#portfolio'>Portfolio</a></li>
    <li><a href='#testimonials'>Testimonials</a></li>
    <li><a href='#contact'>Contact</a></li>
    </ul>

    <div className="footer__socials">
    <a href='https://facebook.com'><BsFacebook /></a>
    <a href='https://instagram.com'><AiFillInstagram /></a>
    <a href='https://twitter.com'><GrTwitter /></a>
    </div>

    <div className="footer__copyright"> 
    <small>&copy; AmirCodes. All rights reserved.</small>
    </div>
    
    </footer>
  )
}

export default Footer