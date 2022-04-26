import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUserTie} from 'react-icons/fa' 
import {GrUserWorker} from 'react-icons/gr'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineContactPhone} from 'react-icons/md'
/*use state hook.home link is automatically active want this to change 
based on the links that are clicked */
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
     <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
     <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserTie /></a>
     <a href="#experience"onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><GrUserWorker /></a>
     <a href="#services"onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} ><RiServiceLine /></a>
     <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactPhone /></a>
    </nav>
  )
}

export default Nav