import React from 'react';
import '../allcss/profile.css';
import testImage from '../images/man.png'

function Profile() {
    function menuHandler() {
        console.log("hello world");
    }
    return (
        <div className="profile-bg">
            <div className="menu-dots">
                <p className="profile-name">Honey</p>
                <span className="menu" onClick={() => { menuHandler() }}>...</span>
            </div>
            <div className="avatar">
                <img className="profile-pic" src={testImage} alt="hello" />
                <div className="profile-ring">
                </div>
            </div>
            {/* <div className="bio"></div> */}
            <div className="follower-menu">
                <div className="following">
                    <p>Following</p>
                    <p>4</p>
                </div>
                <div className="followers">
                    <p>Followers</p>
                    <p>490</p>
                </div>
            </div>
            <div className="btn-menu"></div>
        </div>
    );
}

export default Profile;