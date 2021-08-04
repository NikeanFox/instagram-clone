import React from 'react'
import '../css/login-form.css'
import { FaFacebookSquare } from "react-icons/fa";

function LoginForm() {
    return (
        <React.Fragment >
            <div className="login-form-wrapper">
                <div className="form-container">
                    <img className="logo" src="https://freepngimg.com/download/logo/70011-instagram-script-typeface-myfonts-user-logo-font.png" />
                    <form  className="login">
                        <input type="email" className="email-input input" placeholder="email" aria-label="email"/>
                        <input type="text" value="" className="input" placeholder="Password" />
                        <button className="login-btn">Log In</button>
                        <p className="or">OR</p>
                        <button className="login-fb-btn">
                            <FaFacebookSquare /> <span className="fb-btn-text">Log in with Facebook</span>
                        </button>
                        <a href="" className="pass-forget">Forgot password?</a>
                    </form>
                </div>
                <div className="under-form-box">
                    <p>Don't have an account? <a href="" className="signup-link">Sign up</a></p>
                </div>
                <div className="downloads-wrapper">
                    <p>Get the app.</p>
                    <div className="download-link">
                       <a href=""> <img className="ios-down" src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" /></a>
                        <a href=""><img className="android-down" src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" /></a>
                    </div>
                </div>
                
            </div>
           
        </React.Fragment>
        
    )
}

export default LoginForm