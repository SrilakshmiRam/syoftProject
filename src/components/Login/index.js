import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import './index.css'

const Login = () => {
  const [loginEmail,setEmail]=useState('')
  const [loginPassword,setPassword]=useState('')
  const [error,setErrorMsg]=useState(false)
  const details=JSON.parse(localStorage.getItem('userDetails'))
  console.log(details)
  const {email,password}=details
  const navigate=useNavigate()

  const onSubmitLoginForm=async event=>{
      event.preventDefault()
      const url='https://syoft.dev/Api/userlogin/api/userlogin'
      const options={
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        }
      }
      const response=await fetch(url,options)
      if (response.ok===true){
          if(loginEmail===email && loginPassword===password){
              navigate('/Dashboard')
          }else{
              setErrorMsg(true)
          }
      }else {
        console.log("request fails")
      }
  }

  const onChangeEmail=event=>{
    setEmail(event.target.value)
  }

  const onChangePassword=event=>{
    setPassword(event.target.value)
  }

  return (
  <div className='login-container'>
    <h1 className='login-heading'>Login into Your Account</h1>
    <form className='form-container' onSubmit={onSubmitLoginForm}>
      <div className='email-container'>
        <label htmlFor='login-email' className='label'>email</label>
        <input id="login-email" type="text" 
        className='input' 
        onChange={onChangeEmail} 
        value={loginEmail} />
      </div>
      <div className='password-container'>
         <label htmlFor='login-password' className='label'>Password</label>
         <input id="login-password" type="password" 
         className='input' 
         onChange={onChangePassword} 
         value={loginPassword} />
      </div>
      {error && <p>invalid email or password</p>}
      <button type="submit" className='login-btn'>Login</button>
    </form>
  </div>
)
}
export default Login