import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.webp'
import IMG2 from '../../assets/portfolio2.webp'
import IMG3 from '../../assets/portfolio3.webp'
import IMG4 from '../../assets/portfolio4.webp'
import IMG5 from '../../assets/portfolio5.webp'
import IMG6 from '../../assets/portfolio6.webp'

const data = [

  {
    id: 1,
    image: IMG1,
    title: 'Catering Website',
    github: 'https://github.com/amirandersonjones/KC-s-Catering-Website',
    demo: 'https://kcscatering.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'JavaScript Weather App',
    github: 'https://github.com/amirandersonjones/weatherapprework',
<<<<<<< HEAD
    demo: 'https://javascriptweatherforecastapp.web.app/'
=======
    demo: 'https://dribbble.com/Alien_pixels'
>>>>>>> f4646000e69099cdfa3de75978bdfde9d418ecb3
  },
  {
    id: 3,
    image: IMG3,
    title: 'Amazon Login Replica',
    github: 'https://github.com/amirandersonjones/amazon-replica',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Theatre Company Mockup',
    github: 'https://github.com/amirandersonjones/theatrecompanyMOCKUP',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crytp Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crytp Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
     {
       data.map(({id, image, title, github, demo}) => {
         return (
          <article key={id} className='portfolio__item'> 
          <div className='portfolio__item-image'>
            <img src= {image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">  
           <a href={github} className='btn' target='_blank'>Github</a>
           <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
           </article>
         )
       })
     }
      
    </div>
    </section>
  )
}

export default Portfolio