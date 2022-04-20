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
     <a href="#" className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
     <a href="#about"><FaUserTie /></a>
     <a href="#experience"><GrUserWorker /></a>
     <a href="#services"><RiServiceLine /></a>
     <a href="#contact"><MdOutlineContactPhone /></a>
    </nav>
  )
}

export default Nav