import React from 'react';
import '../allcss/upload.css';

function Uploadpreview() {

    function upload() {
        const defaultBtn = document.getElementById("defaultbtn");
        defaultBtn.click();
    };
    const imageSrc = "https://picsum.photos/500/700";
    const bgstyle = {
        background: `imageSrc`,
        blur: `2px`,
    };

    function previewImageHandler(){
        const preview = document.getElementById('preview');
        const defaultBtn = document.getElementById("defaultbtn");
        const file = defaultBtn.files[0];
        if (file){
            const reader = new FileReader();
            reader.onload = function fileReader() {
                preview.setAttribute("src", this.result);
            }
            reader.readAsDataURL(file);
        }
    };


    return (
        <div className="preview" style={bgstyle}>
            <div className="preview-text">
                <p className="text">
                    Share your colorful moments with us
                </p>
            </div>
            <div className="post-content">
                <textarea type="text" className="input" placeholder="Write about your post..."></textarea>
            </div>
            <div className="preview-img">
                <img id="preview" alt=""></img>
            </div>
            <input className="defaultbtn" onChange = {() => {previewImageHandler()}} id="defaultbtn" type="file" hidden>
            </input>
            <div className="btn-sec">
                <button onClick={() => { upload() }} className="custombtn">Upload</button>
                <button className="custombtn">Share</button>
            </div>
        </div>
    );
}

export default Uploadpreview;