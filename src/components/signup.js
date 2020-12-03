import React from 'react';
import '../components/allcss/signup.css';

function Signup() {
    function passToggle(){
        var pass = document.querySelector('.pass');
        if(pass.type === 'password' ){
            pass.type = "text";
        }else {
            pass.type = "password";
        }
    }
    return (
        <div className="signup">
            <div className="title">
                <p>Register and enter the world of memories and joyness.</p>
            </div>
            <div className="avatar">
                <div className="avatar-img"></div>
            </div>
            <div className="form">
                <label className="label">UserName</label>
                <input className="input" type="text" placeholder="Enter a Unique username"></input>
                <label className="label">Email</label>
                <input className="input" type="email" placeholder="Enter your email"></input>
                <label className="label">Password</label>
                <div className="sp">
                    <input className="pass" type="password" placeholder="Enter a Strong password"></input>
                    <div className="eye">
                        <input type="checkbox" onClick = {passToggle()} className="eye-box"></input>
                    </div>
                </div>
            </div>
            {/* <ul className="pass-req">
                <li className="list">One lowercase letter</li>
                <li className="list">One uppercase letter</li>
                <li className="list">One special character </li>
                <li className="list">One number</li>
            </ul> */}
        </div>
    );
}

export default Signup;