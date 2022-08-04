import React from 'react'
import mail from '../../Images/mail.png'

function Newsletter() {
  return (
    <>
      <div className="wrap-8">
        <div className="container ">
            <div className="row ">
                <div className="col-md-12 letter">
                    <h2>Subscribe to our News Letter</h2>
                    <h4>What are you waiting for, subscribe now!</h4>
                    <div className='input'>
                    <input placeholder='Email Address'/>
                    </div>
                    <div className='inputimg'>
                    <img src={mail} alt="" />
                    </div>
                    <div className='inputbtn'>
                    <button className='submit'>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Newsletter
