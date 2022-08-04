import React from 'react'
import Style from '../../Images/Stylebtn.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import tabimg from '../../Images/tabimg.png'
import assets from '../../Images/assets.png'
import fund from '../../Images/fund.png'
import startfarming from '../../Images/startfarming.png'
import playstore from '../../Images/playstore.png'
import appleimg from '../../Images/appleimg.png'
import { Link } from 'react-router-dom';
const Tabsection = () => {
  return (
    <>
       <div className="wrap-4">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="style styl">
               <img src={Style} alt="" />
               <h4>How it Works</h4>
               </div>
               <h2>Start <span>Farming</span> in just few steps</h2>
               <Tabs>
    <TabList>
      <Tab>Download the App</Tab>
      <Tab>Fund your wallet</Tab>
      <Tab>Buy Assets</Tab>
      <Tab>Start Farming</Tab>
    </TabList>

    <TabPanel>
      <div className="row tab-content">
        <div className="col-md-6 tabsection1">
        <button className='btn4'>Step 1</button>
        <h3>Download the MyFarmPet App</h3>
        <h5>Both iOS and Android devices support the "Myfarmpet App." The app is available for download from the Apple Store or Google Play Store.</h5>
        <Link to={'/'} ><img src={playstore} alt="" className='playstore' /></Link>
        <Link to={'/'} ><img src={appleimg} alt="" /></Link>
        <Link to={'/'} className="getlink">Get the App</Link>
        </div>
        <div className="col-md-6">
         <img src={tabimg} alt="" className='tabimg img-fluid '/>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="row tab-content">
        <div className="col-md-6 tabsection1">
        <button className='btn4'>Step 2</button>
        <h3>Download the MyFarmPet App</h3>
        <h5>Both iOS and Android devices support the "Myfarmpet App." The app is available for download from the Apple Store or Google Play Store.</h5>
        <Link to={'/'} ><img src={playstore} alt="" className='playstore' /></Link>
        <Link to={'/'} ><img src={appleimg} alt="" /></Link>
        <Link to={'/'} className="getlink">Get the App</Link>
        
        </div>
        <div className="col-md-6">
         <img src={fund} alt="" className='tabimg img-fluid '/>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="row tab-content">
        <div className="col-md-6 tabsection1">
        <button className='btn4'>Step 3</button>
        <h3>Download the MyFarmPet App</h3>
        <h5>Both iOS and Android devices support the "Myfarmpet App." The app is available for download from the Apple Store or Google Play Store.</h5>
        <Link to={'/'} ><img src={playstore} alt="" className='playstore' /></Link>
        <Link to={'/'} ><img src={appleimg} alt="" /></Link>
        <Link to={'/'} className="getlink">Get the App</Link>
        
        </div>
        <div className="col-md-6">
         <img src={assets} alt="" className='tabimg img-fluid '/>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="row tab-content">
        <div className="col-md-6 tabsection1">
        <button className='btn4'>Step 4</button>
        <h3>Download the MyFarmPet App</h3>
        <h5>Both iOS and Android devices support the "Myfarmpet App." The app is available for download from the Apple Store or Google Play Store.</h5>
        <Link to={'/'} ><img src={playstore} alt="" className='playstore' /></Link>
        <Link to={'/'} ><img src={appleimg} alt="" /></Link>
        <Link to={'/'} className="getlink">Get the App</Link>
        
        </div>
        <div className="col-md-6">
         <img src={startfarming} alt="" className='tabimg img-fluid '/>
        </div>
      </div>
    </TabPanel>
  </Tabs>
                </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default Tabsection