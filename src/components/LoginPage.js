import React from 'react'
import Phone from './Phone'
import LoginForm from './LoginForm'
import '../css/login-page.css'
function LoginPage() {
    return (
        <React.Fragment>
            <div className="loginpage-container">
                <div className="loginpage-container-wrapper">
                    <Phone />
                    <LoginForm />
                </div>
                <footer>
                    <div className="links">
                        <a href="">About</a>
                        <a href="">Blog</a>
                        <a href="">Jobs</a>
                        <a href="">Help</a>
                        <a href="">API</a>
                        <a href="">Privacy</a>
                        <a href="">Terms</a>
                        <a href="">Top Accounts</a>
                        <a href="">Hashtags</a>
                        <a href="">Locations</a>
                        <a href="">Instagram Lite</a>
                    </div>
                    <div className="end">
                        <select name="" id="" className="language-select">
                            <option value="">English</option>
                            <option value="">Turkish</option>
                        </select>
                        <p>© 2021 Instagram from Facebook</p>
                    </div>
                </footer>
            </div>
            
        </React.Fragment>
    );
}

export default LoginPage