import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BsAwardFill} from 'react-icons/bs'
import {ImUsers} from 'react-icons/im'
import {GiFullFolder} from 'react-icons/gi'


const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      
      <div className="about__me"> 
      <div className="about__me-image">
      <img src={ME} alt=" about_me image"/>
      </div>
      </div>

      <div className="about__content">
      <div className= "about__cards">
      
      <article className='about__card'>
      <BsAwardFill className='about__icon'/>
      <h5>Experience</h5>
      <small>1+ Year Working</small>
      </article>
    
      <article className='about__card'>
      <ImUsers className='about__icon'/>
      <h5>Clients</h5>
      <small>Inquire Within</small>
      </article>

      <article className='about__card'>
      <GiFullFolder className='about__icon'/>
      <h5>Projects</h5>
      <small>80+ Completed Projects</small>
      </article>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempora reiciendis sapiente veritatis itaque vel voluptates, iste laboriosam cupiditate, enim odit! Fugit nam officiis aspernatur molestias esse, repellendus aliquid numquam!
      </p>
      <a href= "#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About