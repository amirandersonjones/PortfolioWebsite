import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1> Amir-Anderson Jones</h1>
        <div className="h5 text-light"> Front-End Developer</div>
        <CTA />
      </div>
    </header>
  )
}

export default Header