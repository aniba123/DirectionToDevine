import React from 'react';
import './home.css';
import Navbar from '../../component/navbar/Navbar';

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='overlay-home'>
          <Navbar />
          <h1 className='h1'>Let's Explore The Linguistic Beauty Of The Divine's Message, Al-Kitab</h1>
          <div className='home-button-div'> <a href='/courses'>
            <button className='home-selfbox'>Explore</button></a></div>
        </div>
      </div>
      <div className='home-second-page'>
        <div className='home-heading-side'>
          <div className='home-second-heading'>
            <div className='home-second-h1'>About the</div>
            <div className='home-second-h2'>initiative.</div>
          </div>
          <div className='home-second-heading2'>
            <div className='home-second-h1-2'>Our Mission</div>
            <div className='home-second-h2-2'>The DTD’s mission is to make the learning of the Quranic Arabic
              and the linguistic study of the Quran accessible
              worldwide in a way that is innovative, accessible, and approachable.</div>
          </div>
        </div>

        <div className='home-second-paragraph-side'>
        <div className='home-second-paragraph'>Direction to Divine is the reality of the dream
         seen by Ma’am Zille Huma in 2017. Mam Zille Huma has done Master’s in English Literature
          from the University of Punjab, Pakistan and studied linguistics as a subject in it. Her
           pursuit of Islamic knowledge started when she began to attend the Arabic linguistic 
           lecture series by Ustadh Nouman Ali khan in 2014 and various other scholars.</div>
           <div className='home-second-paragraph2'>She is doing an Arabic language programme 
           by Bayyinah Institute and further studying Lughat-ul-Arabia. She has done Higher
            Academic Studies in Shariah Sciences, in which she studied multiple courses that 
            include Aqeedah, Usool-e-Fiqh, Usool-e-Tafseer, Usool-e-Hadith, Amsaal-ul-Quraan,
             Arabic grammar etc. She began to do linguistic research to explore the beauty 
             of the Divine’s message.<br/><br/>
             She aims to share the linguistic beauty of Al-Quran with Aesthetically 
             Illustrated concepts, accessible worldwide in a way that is innovative and approachable.</div>
        </div>
      </div>
    </>
  )
}

export default Home;