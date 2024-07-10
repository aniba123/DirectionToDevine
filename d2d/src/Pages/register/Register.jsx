// import React from 'react';
import './register.css';
import { Link } from 'react-router-dom'
import logoregister from '../../assets/registerlogo.png'

const Register = () => {

  return (
    <div className='register'>
      <div className='navbar-register-main'>
        <div className='register-logo-div'>
          <Link to='/'> <img src={logoregister} className='self-logo-register'></img></Link>
        </div>
        <div className='links-register'>
          <Link to='/'>Home</Link>
          <Link to='/books'>Books</Link>
          <Link to='/courses'>Courses</Link>
          <Link to='/donate'>Donate</Link>
          <Link to='/register'>Register</Link>
        </div>
      </div>
      <div className='main-register-page'>
        <div className='main-heading'>Register</div>
        <div className='form-register'>
          <div className='composition-both'>
            <div className='first-register-form'>
              <label className='register-label'>Full Name</label>
              <input className='register-input' type='text'></input>
              <label className='register-label'   >Email</label>
              <input className='register-input' type='email'></input>
              <label className='register-label'>Select Course</label>
              <select className='register-input' type='text'  >
                <option>Nazra</option>
                <option>Hifz</option>
                <option>Alma course</option>
              </select>
              <label className='register-label'>Phone No.</label>
              <input className='register-input' type='text'></input>
              <label className='register-label' >Gender</label><br /><br />
              <label style={{ color: 'green', padding: '20px' }} ><input type='radio' name="gender" value="male" defaultChecked></input>Male</label>
              <label style={{ color: 'green', padding: '20px' }}><input type='radio' name="gender" value="female"></input>Female</label>
              <label style={{ color: 'green', padding: '20px' }}><input type='radio' name="gender" value="custom"></input>Custom</label>
            </div>
            <dv className='second-register-form'>
              <label className='register-label'>Watsap No.</label>
              <input className='register-input' type='text'></input>
              <label className='register-label'>Country</label>
              <input className='register-input' type='text'></input>
              <label className='register-label'>City</label>
              <input className='register-input' type='text'></input>
              <label className='register-label'>Address</label>
              <textarea rows={8} cols={50} style={{ resize: 'none', color: 'green', padding: '20px' }}></textarea>
            </dv>
          </div>
          <div className='button-register'>Register</div>
        </div>



      </div>

    </div>
  )
}

export default Register;