import React from 'react';
import '../components/allcss/signin.css';
import avatar from './images/man.png';

function Signin() {
    function showPass() {
        const pass = document.querySelector('.pass');
        const eye = document.querySelector('#eye');
        if (pass.type === 'password') {
            pass.type = "text";
        } else {
            pass.type = "password";
        }
        eye.classList.toggle('fa-eye-slash');
    }
    return (
        <div className="signup">
            <div className="login">
                <h1>Login</h1>
                <div className="login-box">
                    <div className="avatar">
                        <img src={avatar} alt="avatar" className="image"></img>
                    </div>
                    <div className="input">
                        <label className="lable">Username or email</label>
                        <input type="text" className="inp"></input>
                        <label className="lable">Password</label>
                        <div className="inp-bg">
                            <input type="password" className="pass"></input>
                            <div className="eye">
                                <i onClick={() => { showPass() }} id="eye" className="fa fa-eye"></i>
                            </div>
                        </div>
                        <button className="btn"><a href="#">Login</a></button>
                    </div>
                    <div className="f-pass">
                        <a href="#" className="link">Forgot Password?</a>
                    </div>
                    <div className="social-btn">
                        <button className="btn-s"><i className="fa fa-google"></i></button>
                        <button className="btn-s"><i className="fa fa-facebook-f"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;