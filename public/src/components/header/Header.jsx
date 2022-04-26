import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ME.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1> Amir-Anderson Jones</h1>
        <div className="h5 text-light"> Front-End Developer</div>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src= {ME} alt ="me" />
        </div>
        
        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header