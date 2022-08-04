import React from 'react'
import download from '../../Images/download.png'
import Style from '../../Images/Stylebtn.png'
const Download = () => {
  return (
    <>
      <div className="wrap-7">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="mobileimg">
                    <img src={download} alt="" className='img-fluid img'/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 dcontent">
                <div className="style">
               <img src={Style} alt="" />
               <h4>Download Myfarmpet</h4>
               </div>
               <h2>Let's help you become <span>financially free</span> and save you the stress of actual farming.</h2>
               <h3>Join our 200,000+ users farming and setting long term goals!</h3>
              <div>
              <a href="https://play.google.com/" target="_blank" ><button> <i class="fa-brands fa-google-play"></i>GOOGLE PLAYSTORE</button></a>
              <a href="https://www.apple.com/in" target="_blank"> <button> <i class="fa-brands fa-apple"></i>APPLE STORE</button></a>
              </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Download