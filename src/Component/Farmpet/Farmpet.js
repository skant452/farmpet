import React from 'react'
import Style from '../../Images/Stylebtn.png'
import henimg from '../../Images/henimg.png'
import frame1 from '../../Images/frame1.png'
import frame2 from '../../Images/frame2.png'
import frame3 from '../../Images/frame3.png'
import frame4 from '../../Images/frame4.png'
import { Link } from 'react-router-dom'
function Farmpet() {
  return (
    <>
      <div className="wrap-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="style">
               <img src={Style} alt="" />
               <h4>Myfarmpet Importance</h4>
               </div>
               <h2>General Benefits of using <span>MyFarmPet</span></h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className='border'>
                            <img src={frame1} alt="" className='frame'/>
                            <h3>Farmpet farm gets </h3>
                            <h5>Farmpet farm gets an asset and grow it ready to start producing </h5>
                            <Link to={'/'}><h6>Learn More</h6></Link>
                        </div>
                        <div className='border'>
                            <img src={frame3} alt="" className='frame'/>
                            <h3>Farmpet farm gets </h3>
                            <h5>Investor purchase the assets and receive daily rewards from the assets </h5>
                            <Link to={'/'}><h6>Learn More</h6></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                    <div className='border'>
                            <img src={frame2} alt="" className='frame'/>
                            <h3>Farmpet farm gets </h3>
                            <h5>The assets has insurance in place to cover in case of loss.</h5>
                            <Link to={'/'}><h6>Learn More</h6></Link>
                        </div>
                        <div className='border border4'>
                            <img src={frame4} alt="" className='frame'/>
                            <h3>Farmpet farm gets </h3>
                            <h5>Assets can be sold anytime.</h5>
                            <Link to={'/'}><h6>Learn More</h6></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                     <img src={henimg} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Farmpet
