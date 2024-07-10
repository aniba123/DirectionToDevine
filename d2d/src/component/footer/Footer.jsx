// import React from 'react'
import './footer.css';
import footerlogo from '../../assets/footerlogo.png'
import { FaSquareFacebook } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
const Footer = () => {
  return (
    <>
      <div className='footer-main-yellow'>
        <p className='footer-yellow-paragraph'>Allah will raise those who have believed
          among you and those who<br /> were given knowledge, by degrees <br /><br />Al- Quran (58:11)</p>
      </div>
      <div className='footer-main-green'>
        <div className='footer-upper'></div>
        <div className='footer-three-main'>
          <div className='footer-one'>
            <img src={footerlogo} className='self-footerlogo' />
            <p className='footer-one-p'>With a transformational and ambitious vision to be the Global
              Arabic linguistic study platform that provides universal access to the world’s best
              education of Classical Arabic, the linguistic beauty of the Quran and the studying of
              the prophetic journey in-depth with graphical presentation.</p>
          </div>
          <div className='footer-two'>
            <FaSquareFacebook  size={'30'} />
            <MdMessage size={'30'} />
            <IoLogoYoutube size={'30'} />
            <FaInstagramSquare size={'30'} />
            <TiSocialTwitter size={'30'} />
          </div>
          <div className='footer-three'>
            <h1 style={{ color: 'green', fontWeight: '20px', fontSize: '20px' }}>Courses</h1>
            <p style={{ paddingTop: '5px' }}>Start Your Journey Through The Quran’s Language.</p>
            <h1 style={{ color: 'green', paddingTop: '30px', fontWeight: '20px', fontSize: '20px' }}>Books</h1>
            <p style={{ paddingTop: '5px' }}>Explore the linguistic beauty of the Quran and
              understand the divines message.</p>
            <h1 style={{ color: 'green', paddingTop: '30px', fontWeight: '20px', fontSize: '20px' }}>Seerah</h1>
            <p style={{ paddingTop: '5px' }} >Gain a better understanding of the Prophetic life and explore
              the approaches in reviving
              the spirit of Islam through studying the Prophetic journey in-depth.</p>
          </div>
        </div>
       
      </div>
    </>
  )
}

export default Footer;