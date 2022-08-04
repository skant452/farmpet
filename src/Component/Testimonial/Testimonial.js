import React from 'react'
import Style from '../../Images/Stylebtn.png'
import Slider from "react-slick";
import slider1 from '../../Images/slider1.png'
import slider2 from '../../Images/slider2.png'
import slider3 from '../../Images/slider3.png'
import slider4 from '../../Images/slider4.png'
const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed:5000,
    autoplay:"true",
    button:"none",
    cssEase: "smooth(0.7, 0.5, 0.3,1)",
  };
  return (
    <>
        <Slider {...settings}>
          <div>
          <div className="wrap-6">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <div className='slider'>
                    <img src={slider1} alt="" className='img-img-fluid'/>
                    </div>
                </div>
                <div className="col-md-6 slider-container">
                <div className="style mt-5 ">
               <img src={Style} alt="" />
               <h4>Testimonials</h4>
               </div>
               <h3>This is a friendly farm that you can collect, grow and care for. In this game you have to feed your animals and complete quests for them, making them healthier and happier.</h3>
               <h5>Blessing Christopher - Creative writer & Story Teller</h5>
                </div>
            </div>
        </div>
      </div> 
          </div>
          <div>
          <div className="wrap-6" >
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                <div className='slider'>
                    <img src={slider2} alt="" className='img-img-fluid'/>
                    </div>
                </div>
                <div className="col-md-6 slider-container">
                <div className="style mt-5 ">
               <img src={Style} alt="" />
               <h4>Testimonials</h4>
               </div>
               <h3>The more animals you get, the more manure will go into the compost pile. And with your own chickens, you can sell eggs! On Big Farm Day, we celebrate anything that you put into your farm through our actions on a platform called Twitter. </h3>
               <h5>Wisdom Godswill - Building Contractor</h5>
                </div>
            </div>
        </div>
      </div> 
          </div>
          <div>
          <div className="wrap-6">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                <div className='slider'>
                    <img src={slider3} alt="" className='img-img-fluid'/>
                    </div>
                </div>
                <div className="col-md-6 slider-container">
                <div className="style mt-5 ">
               <img src={Style} alt="" />
               <h4>Testimonials</h4>
               </div>
               <h3>Hi there! Thanks for checking out my farm. I know it's in a really weird place, but there is no place like it. I started this little place almost 2 years ago when I realized that the only thing I enjoyed about working at an office was looking outside at all of the farmland. </h3>
               <h5>Udej Judith - Poduction Manager</h5>
                </div>
            </div>
        </div>
      </div> 
          </div>
          <div>
          <div className="wrap-6">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                <div className='slider'>
                    <img src={slider4} alt="" className='img-img-fluid'/>
                    </div>
                </div>
                <div className="col-md-6 slider-container">
                <div className="style mt-5 ">
               <img src={Style} alt="" />
               <h4>Testimonials</h4>
               </div>
               <h3>Welcome to your own farm! This is your farm! Take care of it and unlock new animals to keep on your farm by completing quests.</h3>
               <h5>Jerry Ikwuje - Bank Receptionist</h5>
                </div>
            </div>
        </div>
      </div> 
          </div>
        </Slider>
     
    </>
  )
}

export default Testimonial