import React from 'react'

const About = ({open}) => {
  return (
    <section className={`${open? 'about-section slider': 'about-section'}`} >
      <div className='about'>
        <h1>hello</h1>
      </div>
    </section>
  )
}

export default About
