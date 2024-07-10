import React, { useState } from 'react';
import './donate.css';
import Navbar from '../../component/navbar/Navbar';

const Donate = () => {
  const [data,setData]=useState({
    Name:"",
    Email:"",
    PhoneNo:0,
    Amount:0,
    Company:0,
  });
  const handelInputs =(e) =>{
    const val=(e.target.value);
    const Name=(e.target.name);
    setData({...data,[Name]:val});
  }




  return (
    <>
      <div className='donate-header'><Navbar /></div>
      <div className='donate-b-img'>
        <div className='overlay-donate'>
        </div>
      </div>
      <div className='donate-second-page'>
        <div className='donate-second-page-form'>
          <h1 className='donate-h1'>Make a Donation</h1>
          <p className='donate-p1'>Every donation, no matter how big or small, makes a significant difference
            to our cause. Thank you for doing your part to help</p>
          <form className='donate-form'>
            <label className='donate-label'>Name</label><br /> 
            <input type='text' name='Name'  className='donate-input'  onChange={ handelInputs}></input><br />
            <label className='donate-label'>Email</label><br /> 
            <input type='email' name='Email' className='donate-input' onChange={ handelInputs}></input><br />
            <label className='donate-label'>Phone No.</label><br /> 
            <input type='tel' name='PhoneNo' className='donate-input'  onChange={ handelInputs}></input><br />
            <label className='donate-label'>Amount</label><br /> 
            <input type='number' name='Amount' className='donate-input' onChange={ handelInputs}></input><br />
            <label className='donate-label'>Company</label><br /> 
            <input type='text' name='Company' className='donate-input' placeholder='if applicable' onChange={ handelInputs}></input><br />
            <button className='donate-button'>Submit</button>
            <button className='donate-button2' type='reset'>Reset</button>
    
          </form>

        </div>
      </div>
    </>

  )
}

export default Donate;