import React from 'react'
import Vector from '../../Images/Vector.png'
const Hero = () => {
  return (
    <>
      <div className="wrap-2">
        <div className="container">
            <div className="row">
                <div className="col-md-12 hero-content">
                    <h1>World first digital</h1>
                    <h1>farming experience</h1>
                    <h4>start farming from the comfort of your home</h4>
                    <button className='btn1'>Get Started</button>
                    <button className='btn2'>View Real Life Farm <img src={Vector} alt="/" /></button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero
