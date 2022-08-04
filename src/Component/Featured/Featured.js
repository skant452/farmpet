import React from "react";
import icon1 from "../../Images/icon1.png";
import icon2 from "../../Images/icon2.png";
import icon3 from "../../Images/icon3.png";
import icon4 from "../../Images/icon4.png";
import Style from "../../Images/Stylebtn.png";
function Featured() {
  return (
    <>
      <div className="wrap-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 featured-section">
              <div className="style">
                <img src={Style} alt="" />
                <h4>Faetured</h4>
              </div>
              <h2>
                Who do policy holders <br />
                recommend <span>us?</span>
              </h2>
              <h5>
                Due to our insurance coverage, more than millions of people
                could become users. These factors lead to policyholders
                recommending the premium brand.
              </h5>
            </div>
            <div className="col-md-3 section1">
              <div className="asset">
                <img src={icon1} alt="" />
                <h4>Live Assets</h4>
                <h5>
                  Assets are existing on a live farm with insurance cover{" "}
                </h5>
              </div>
              <div className="funds">
                <img src={icon3} alt="" />
                <h4>Funds Distribution</h4>
                <h5>
                  User can send and receive funds from other users within the
                  app. They can also withdraw this fund into their bank accounts
                </h5>
              </div>
            </div>
            <div className="col-md-3 section2">
              <div className="daily">
                <img src={icon2} alt="" />
                <h4>Daily Dividends</h4>
                <h5>Investor receives daily dividends from asset. </h5>
              </div>
              <div className="sales">
                <img src={icon4} alt="" />
                <h4>Instant Buy and Sale</h4>
                <h5>
                  Assets can only be purchased through the app and can be sold
                  at anytime.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
