import React from 'react'
import footer from '../../Images/footer.png'
const Footer = () => {
  return (
    <>
       <div className="wrap-9">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                  <img src={footer} alt="" />
                  <div class="input-group pt-3 ms-2">
  <select class="custom-select select" id="inputGroupSelect04">
    <option selected>English</option>
    <option value="1">Hindi</option>
  </select>
</div>
                </div>
                <div className="col-md-8">
                <div className="row">
                    <div className="col-md-4">
                        <ul>
                            <li><h4>Support</h4></li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Support</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                    <ul>
                            <li><h4>Company</h4></li>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li>Agriculture</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                    <ul>
                            <li><h4>Contact</h4></li>
                            <a href="https://www.facebook.com/login/" target="_blank"><li>Facebook</li></a>
                            <a href="https://twitter.com/i/flow/login" target="_blank"><li>Twitter</li></a>
                            <a href="https://www.instagram.com/accounts/login/" target="_blank"><li>Instagram</li></a>
                            <a href="https://in.linkedin.com/" target="_blank"><li>LinkedIn</li></a>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
               <div className="row padding">
               <div className="col-md-8">
                     <h5>Made with 💓 from the African Diaspora 🌎<span>|</span> © Copyright MyFarmPet 2022. All Rights Reserved</h5>
                </div>
                <div className="col-md-4">
                     <div className="terms">
                        <h5>Terms and Conditions</h5>
                        <h5>Privacy Policy</h5>
                     </div>
                </div>
               </div>
        </div>
       </div>
    </>
  )
}

export default Footer