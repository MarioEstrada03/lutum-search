import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import {login} from './api/auth'
import {useNavigate} from 'react-router-dom'


export default function Login() {
    const navigate = useNavigate()
      const [loginInput, setloginInput] = useState({email: '', password: ''})
      const [error, setError] = useState('')
    
  
    const handleChange = (event) => {
        setloginInput({...loginInput, [event.target.name]: event.target.value})
      }
  
    const handleSubmit = (event) => {
      event.preventDefault()
      const response = login(loginInput.email, loginInput.password)
      if (response.user){
          //TODO: using React state and prop passing, find how to pass the user up to our app 
          // or home page so that they can be displayed a welcome message
          navigate("/")
      }
      if (response.error){
        setError(response.error)
      }
    }
  
      return (
        <div className="login-container">
          <div className="login-title"><h1>Login</h1></div>
    
          <form onSubmit={handleSubmit} className="auth-form-wrapper">
            <div className="form-group">
            <FontAwesomeIcon id="user" icon={faUser} />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={loginInput.email}
                onChange={handleChange}
              />
            </div>
  
            <div className="form-group">
            <FontAwesomeIcon id="lock" icon={faLock} />
              <input
                type="password"
                name="password"
                placeholder="Your password"
                value={loginInput.password}
                onChange={handleChange}
              />
            </div>
            {error && <span style={{color: 'red'}}>{error}</span>}
            <button className="btn" type="submit">
              Login
            </button>
          </form>
        </div>
      );
  }