import React from 'react'
import Style from '../../Images/Stylebtn.png'
import Rectangle from '../../Images/Rectangle.png'
const About = () => {
  return (
    <>
      <div className="container mt-3 mb-3 ">
        <div className="row">
            <div className="col-md-6 col-sm-12 About-section">
               <div className="style">
               <img src={Style} alt="" />
               <h4>About Us</h4>
               </div>
               <h2>Who we are <span>MyFarmPet</span></h2>
               <h5>Farmpet farming is a way to buy and own real profit earning assets. This allows you to enter the world of farming without getting a real farm and having to get idea on how farming works but yet still bring in profits.</h5>
               <button className='btn3'>Read More <i class="fa-solid fa-arrow-right-long"></i></button>
            </div>
            <div className="col-md-6 col-sm-12">
                <img src={Rectangle} alt="" className='img-fluid'/>
            </div>
        </div>
      </div>
    </>
  )
}

export default About