import React from 'react'
import features1 from '../../Images/features1.png'
import features2 from '../../Images/features2.png'
import features3 from '../../Images/features3.png'
import features4 from '../../Images/features4.png'
import playstore from '../../Images/playstore.png'
import appleimg from '../../Images/appleimg.png'
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <>
       <div className="wraper-1">
        <div className="container">
            <div className="row">
            <h1>Myfarmpet features</h1>
                <div className="col-md-6">
                    <div className="features1">
                        <img src={features1} alt="" className='img-fluid'/>
                    </div>
                </div>
                <div className="col-md-6">
                  <div className="features-content">
                    <h2>Pen Section</h2>
                    <h5>Both iOS and Android devices support the "Myfarmpet App." The app is available for download from the Apple Store or Google Play Store.</h5>
                    <div>
                    <Link to={'/'} ><img src={playstore} alt="" className='playstore' /></Link>
        <Link to={'/'} ><img src={appleimg} alt="" /></Link>
        <Link to={'/'} className="getlink">Get the App</Link>
                    </div>
                  </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6">
                    
                    <div className="features-content  features2">
                    <h2>The Farmers Market</h2>
                    <h5>Both iOS and Android devices support the "Myfarmpet App." The app is available for download from the Apple Store or Google Play Store.</h5>
                    <div>
                    <Link to={'/'} ><img src={playstore} alt="" className='playstore' /></Link>
        <Link to={'/'} ><img src={appleimg} alt="" /></Link>
        <Link to={'/'} className="getlink">Get the App</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-5">
                 <div className="features1">
                        <img src={features2} alt="" className='img-fluid'/>
                 </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mt-5">
                <div className="features1">
                        <img src={features4} alt="" className='img-fluid'/>
                 </div>
                    
                </div>
                <div className="col-md-6">
                <div className="features-content features4">
                    <h2>Loan Section (Akawo)</h2>
                    <h5>Both iOS and Android devices support the "Myfarmpet App." The app is available for download from the Apple Store or Google Play Store.</h5>
                    <div>
                    <Link to={'/'} ><img src={playstore} alt="" className='playstore' /></Link>
        <Link to={'/'} ><img src={appleimg} alt="" /></Link>
        <Link to={'/'} className="getlink">Get the App</Link>
                    </div>
                  </div>
                 
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    
                    <div className="features-content  features2">
                    <h2>Referral</h2>
                    <h5>Both iOS and Android devices support the "Myfarmpet App." The app is available for download from the Apple Store or Google Play Store.</h5>
                    <div>
                    <Link to={'/'} ><img src={playstore} alt="" className='playstore' /></Link>
        <Link to={'/'} ><img src={appleimg} alt="" /></Link>
        <Link to={'/'} className="getlink">Get the App</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-5">
                 <div className="features1">
                        <img src={features3} alt="" className='img-fluid'/>
                 </div>
                </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default Features