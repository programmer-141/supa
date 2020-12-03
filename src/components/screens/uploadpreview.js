import React from 'react';
import '../allcss/upload.css';

function Uploadpreview() {

    const defaultBtn = document.querySelector(".defaultbtn");
    // const customBtn = document.querySelector(".custombtn");
    function upload() {
        defaultBtn.click();
        console.log('working');
    };
    // https://picsum.photos/500/500
    const imageSrc = "https://picsum.photos/500/700";
    const bgstyle = {
        background: `imageSrc`,
        blur: `2px`,
    };
    return (
        <div className="preview" style={bgstyle}>
            <div className="preview-text">
                <p className="text">
                    Share your colorful moments with us
                </p>
            </div>
            <div className="post-content">
                <textarea type="text" className="input" placeholder = "Write about your post..."></textarea>
            </div>
            <div className="preview-img">
                <img src={imageSrc} alt=""></img>
            </div>
            <input className="defaultbtn" type="file" hidden>
            </input>
            <div className="btn-sec">
                <button onClick={upload} className="custombtn">Upload</button>
                <button className="custombtn">Share</button>
            </div>
        </div>
    );
}

export default Uploadpreview;