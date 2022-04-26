import React from 'react'
import './services.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className="container services__container">
      <article className="services">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>
        <ul className='service__list'>
          
          <li>
          <BsCheckCircleFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>

          <li>
          <BsCheckCircleFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>

          <li>
          <BsCheckCircleFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>

          <li>
          <BsCheckCircleFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>

          <li>
          <BsCheckCircleFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
        </ul>
      </article>
      {/* End of UI/UX */}
      <article className="services">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>
        <ul className='service__list'>
          
          <li>
          <BsCheckCircleFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>

          <li>
          <BsCheckCircleFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>

          <li>
          <BsCheckCircleFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>

          <li>
          <BsCheckCircleFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>

          <li>
          <BsCheckCircleFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
        </ul>
      </article>
      {/* End of webdevelopment */}
      <article className="services">
        <div className="service__head">
          <h3>Content Creation</h3>
        </div>
        <ul className='service__list'>
          
          <li>
          <BsCheckCircleFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>

          <li>
          <BsCheckCircleFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>

          <li>
          <BsCheckCircleFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>

          <li>
          <BsCheckCircleFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>

          <li>
          <BsCheckCircleFill className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
        </ul>
      </article>
      {/* End of content creation */}
    </div>   
    </section>
  )
}

export default Services