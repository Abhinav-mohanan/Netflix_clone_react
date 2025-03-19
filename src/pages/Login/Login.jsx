import React, {useState} from 'react'
import "./login.css"
import logo from '../../assets/logo.png'

const Login = () => {

const [signState, setsingState] = useState("Sign In")

  return (
    <>
    <div className='login'>
      <img src={logo} alt="logo" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState=='Sign Up'?<input type="text" placeholder='Your name' />:<></>}
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='password' />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remeber Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="font-switch">
          {signState=="Sign In"? <p>New to Netflix? <span onClick={()=>{setsingState("Sign Up")}}>Sign up Now</span></p>:<p>Already have account? <span onClick={()=>{setsingState("Sign In")}}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
    </>
  )
}

export default Login