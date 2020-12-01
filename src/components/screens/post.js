import React from 'react';
import '../allcss/home.css';


function Post() {
    //background image styling
    const postPic = "https://picsum.photos/500/500" ; 
    const bgStyle = {
        // background : `url("${postPic}")center no-repeat`,
        // backgroundSize :`100% 100%`,
        background: `#FFFAFA`,
    };
    return (
        <div className="post-wrapper" style = {bgStyle}>
            <div className="post-bg">
                {/* <div className="blur" style={bgStyle}>  </div> */}
                <div className="post">
                    <div className="user">
                        <div className="user-img-bg">
                            <img className="user-img" src ={postPic}></img>
                        </div>
                        <div className="adminDetails">
                            <div className="user-data"><p>Honey</p></div>
                            <div className="user-data"><p>Sponcered</p></div>
                        </div>
                    </div>
                    <div className="image-sec">
                        <img className="image" src = {postPic} alt="" ></img>
                    </div>
                    <div className="icons">
                        <a href="#"><i className="fa fa-heart"></i></a>
                        <a href="#"><i className="fa fa-comments"></i></a>
                        <a href="#"><i className="fa fa-share"></i></a>
                    </div>
                    <div className="like-count">
                        <p>491 Likes</p>
                    </div>
                    <div className="storyText">
                        <p className="lighter">Honey is a good programmer.Honey is a good programmer.Honey is a good programmer.</p>
                    </div>

                    <div className="comments" id="comments">
                        <p><a href="#">View all Comments</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;