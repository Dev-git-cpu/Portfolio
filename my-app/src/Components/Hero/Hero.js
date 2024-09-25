import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <section className='hero-container'>
<div className='hero-content'>
<h2>
    Building Digital Experiences That Inspire
</h2>
<p>
    Passionate Frontend Developer | Transforming Ideas into Seamless and
    Visually Stunning Web Solutions
</p>
</div>
<div className='hero-img'>
    <div>
      <div className='tech-icon'>
        <img src='logo192.png' alt=''/>

      </div>
      <img className='goku' src='Devpic.png'/>
    </div>
    <div>
        <div className='tech-icon'>
            <img src='html.png' alt=''/>
        </div>
        <div className='tech-icon'>
            <img src='css.png' alt=''/>
        </div>
        <div className='tech-icon'>
            <img src='javascript.png' alt=''/>
        </div>

    </div>

</div>

    </section>
  )
}

export default Hero
