import React from 'react';
import '../allcss/upload.css';

function Uploadgallery() {

    const defaultBtn = document.querySelector(".defaultbtn");
    // const customBtn = document.querySelector(".custombtn");
    function upload() {
        defaultBtn.click();
        console.log('working');
    };
    const imageSrc = "https://picsum.photos/id/870/200/300?grayscale&blur=2";
    const bgstyle = {
        background:`imageSrc`,
        blur:`2px`,
    };
    return (
        <div className="gallery" style = {bgstyle}>
            <div className="up-image">
                <img src = {imageSrc} alt=""></img>
            </div>
            <input className="defaultbtn" type="file" hidden>
            </input>
            <button onClick={upload} className="custombtn">Upload</button>
        </div>
    );
}

export default Uploadgallery;