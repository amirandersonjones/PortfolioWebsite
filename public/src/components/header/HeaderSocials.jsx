import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFreeCodeCamp} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/amirandersonjones/" target="_blank"><BsLinkedin /></a>
    <a href="https://github.com/amirandersonjones" target="_blank"><FaGithub /></a>
    <a href="https://www.freecodecamp.org/AmirAJones" target="_blank"><FaFreeCodeCamp /></a>
    </div>
  )
}

export default HeaderSocials