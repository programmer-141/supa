import React from 'react';
import '../allcss/upload.css';
import { Link } from 'react-router-dom';

function Upload() {
    return (
        <div className="upload">
            <p className="label">Create Post</p>
            <div className="upload-btns">
                <div className="btn-set">
                    <Link to="/preview">
                        <button className="btn">
                            <i className="fa fa-camera"></i>
                        </button>
                    </Link>
                    <label className="btn-label">GALLERY</label>
                </div>
                <div className="btn-set">
                    <button className="btn">
                        <i className="fa fa-camera"></i>
                    </button>
                    <label className="btn-label">CAMERA</label>
                </div>
                <div className="btn-set">
                    <button className="btn">
                        <i className="fa fa-camera"></i>
                    </button>
                    <label className="btn-label">LINK</label>
                </div>
                <div className="btn-set">
                    <button className="btn">
                        <i className="fa fa-camera"></i>
                    </button>
                    <label className="btn-label">GALLERY</label>
                </div>
            </div>
        </div>
    );
}

export default Upload;