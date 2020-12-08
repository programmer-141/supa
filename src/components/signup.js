import React from 'react';
import '../components/allcss/signup.css';

function Signup() {
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
        <div>
            <div className="signup">
                <h1>SignUp</h1>
                <div className="signup-box">
                    <div className="input">
                        <label className="lable">Username</label>
                        <input type="text" className="inp"></input>
                        <label className="lable">Email</label>
                        <input type="email" className="inp"></input>
                        <label className="lable">Password</label>
                        <div className="inp-bg">
                            <input type="password" className="pass"></input>
                            <div className="eye">
                                <i onClick={() => { showPass() }} id="eye" className="fa fa-eye"></i>
                            </div>
                        </div>
                        <a href="#"><button className="btn">Signup</button></a>
                    </div>
                </div>
                <div className="a-user">
                    <a href="#" className="link">Already a User?</a>
                </div>
                <div className="social-btn">
                    <button className="btn-s"><i className="fa fa-google"></i></button>
                    <button className="btn-s"><i className="fa fa-facebook-f"></i></button>
                </div>
            </div>
        </div>
    );
}

export default Signup;