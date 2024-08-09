import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdEye ,IoMdEyeOff} from "react-icons/io";
import './index.css';

const SignUp = () => {
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phone,setPhone]=useState('');
  const [pincode,setPincode]=useState('')
  const [password, setPassword] = useState('');
  const [lastname,setLastname]=useState('')
  const [isRequiredName, setIsRequiredName] = useState(false);
  const [isRequiredEmail, setIsRequiredEmail] = useState(false);
  const [isRequiredLastname, setIsRequiredLastname] = useState(false);
  const [isRequiredCity, setIsRequiredCity] = useState(false);
  const [isRequiredPhone, setIsRequiredPhone] = useState(false);
  const [isRequiredPincode, setIsRequiredPincode] = useState(false);
  const [isRequiredPassword, setIsRequiredPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPssword,setShowPassword]=useState(false)

  const navigate = useNavigate();

  const onChangeFirstname = (event) => {
    setFirstname(event.target.value);
    setIsRequiredName(false);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    setIsRequiredPassword(false);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    setIsRequiredEmail(false);
  };

  const onChangeLastname = (event) => {
    setLastname(event.target.value);
    setIsRequiredLastname(false)
  };

  const onChangeCity = (event) => {
    setCity(event.target.value);
    setIsRequiredCity(false)
  };

  const onChangePhone = (event) => {
    setPhone(event.target.value);
    setIsRequiredPhone(false)
  };

  const onChangePincode = (event) => {
    setPincode(event.target.value);
    setIsRequiredPincode(false)
  };

  const onClickIcon=()=>{
    setShowPassword((prevstate=>!prevstate))
  }

  const onSubmitForm = async (event) => {
    event.preventDefault();

    // Validation
    let hasError = false;
    if (firstname === '') {
      setIsRequiredName(true);
      hasError = true;
    }
    if (email === '') {
      setIsRequiredEmail(true);
      hasError = true;
    }
    if (password === '') {
      setIsRequiredPassword(true);
      hasError = true;
    }
    if (lastname === '') {
      setIsRequiredLastname(true);
      hasError = true;
    }
    if (city === '') {
      setIsRequiredCity(true);
      hasError = true;
    }
    if (phone === '') {
      setIsRequiredPhone(true);
      hasError = true;
    }
    if (pincode === '') {
      setIsRequiredPincode(true);
      hasError = true;
    }

    if (hasError) return; // Prevent form submission if validation errors exist

    const userDetails = { firstname, password, email,lastname,pincode,city,phone };
    const url = 'https://syoft.dev/Api/user_registeration/api/user_registeration';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! Status: ${response.status}. Response: ${errorText}`
        );
      }
      // Successful registration
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      navigate('/Login'); 
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while processing your request.');
    }
  };


  const btnText=showPssword?<IoMdEye/>:<IoMdEyeOff/>

  return (
    <div className="signup-form-container">
      <div className="image-container">
        <h1 className="heading">Welcome to our Community</h1>
        <p className="text">
          Fuse helps developers to build organized and well-coded dashboards
          full of beautiful and rich modules. Join us and start building your
          application today.
        </p>
        <div className="users">
          <div className="users-container">
            <img
              src="https://res.cloudinary.com/ddiyemmt3/image/upload/v1721792384/Photo_by_Brooke_Cagle_1_kcz077.png"
              className="profile"
              alt="Profile 1"
            />
            <img
              src="https://res.cloudinary.com/ddiyemmt3/image/upload/v1721792324/Photo_by_Hayes_Potter_yxajii.png"
              className="profile"
              alt="Profile 2"
            />
            <img
              src="https://res.cloudinary.com/ddiyemmt3/image/upload/v1721792317/Photo_by_Joe_Gardner_we192l.png"
              className="profile"
              alt="Profile 3"
            />
            <img
              src="https://res.cloudinary.com/ddiyemmt3/image/upload/v1721792188/Photo_by_Matteo_Minoglio_ihlwmu.png"
              className="profile"
              alt="Profile 4"
            />
          </div>
          <p className="text">
            More than 17k people joined us, it's your turn.
          </p>
        </div>
      </div>
      <form className="card-container" onSubmit={onSubmitForm}>
        <h1 className='signup'>Sign up</h1>
        <p className='account-text'>
          Already have an account? <Link to="/Login">Sign in</Link>
        </p>
        <div className="input-container">
          <label htmlFor="name" className='label-text'>First Name*</label>
          <input
            id="name"
            type="text"
            className="input-text"
            value={firstname}
            onChange={onChangeFirstname}
          />
          {isRequiredName && <p className="error">Required*</p>}
        </div>
        <div className="input-container">
          <label htmlFor="Email" className='label-text'>Email Address*</label>
          <input
            id="Email"
            type="email"
            className="input-text"
            value={email}
            onChange={onChangeEmail}
          />
          {isRequiredEmail && <p className="error">Required*</p>}
        </div>
        <div className="input-container">
          <label htmlFor="password" className='label-text'>Password*</label>
          <div className='hide-container'>
          {showPssword?<input
            id="password"
            type="text"
            className="text-input"
            value={password}
            onChange={onChangePassword}
          />:<input
          id="password"
          type="password"
          className="text-input"
          value={password}
          onChange={onChangePassword}
        />}
          <button type="button" onClick={onClickIcon} className='showtxt-btn'>{btnText}</button>
          </div>
          {isRequiredPassword && <p className="error">Required*</p>}
        </div>
        <div className="input-container">
          <label htmlFor="lastname" className='label-text'>Last Name*</label>
          <input
            id="phone"
            type="text"
            className="input-text"
            value={lastname}
            onChange={onChangeLastname}
          />
          {isRequiredLastname && <p className="error">Required*</p>}
        </div>
        <div className="input-container">
          <label htmlFor="phone" className='label-text'>Phone*</label>
          <input
            id="phone"
            type="text"
            className="input-text"
            value={phone}
            onChange={onChangePhone}
          />
          {isRequiredPhone && <p className="error">Required*</p>}
        </div>
        <div className="input-container">
          <label htmlFor="city" className='label-text'>City*</label>
          <input
            id="city"
            type="text"
            className="input-text"
            value={city}
            onChange={onChangeCity}
          />
          {isRequiredCity && <p className="error">Required*</p>}
        </div>
        <div className="input-container">
          <label htmlFor="pincode" className='label-text'>Zipcode*</label>
          <input
            id="pincode"
            type="text"
            className="input-text"
            value={pincode}
            onChange={onChangePincode}
          />
          {isRequiredPincode && <p className="error">Required*</p>}
        </div>
        <div className="checkbox-container">
          <input type="checkbox" />
          <p className="info">
            I agree to the Terms of Service and privacy policy
          </p>
        </div>
        <button type="submit" className="button">
          Create your free account
        </button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default SignUp;