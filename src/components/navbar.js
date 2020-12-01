import React from 'react';
import './allcss/navbar.css';
import {Link} from 'react-router-dom';

function Navbar (){
    return(
        <div className="navbar">
            <ul className="navlist">
                <li className="list-comp"><Link to ="/"><i className="fa fa-home"></i></Link></li>
                <li className="list-comp"><Link to ="/shop"><i className="fa fa-shopping-cart"></i></Link></li>
                <li className="list-comp up"><Link to ="/upload">+</Link></li>
                <li className="list-comp"><Link to ="/notification"><i className="fa fa-heart"></i></Link></li>
                <li className="list-comp"><Link to ="/profile"><i className="fa fa-circle"></i></Link></li>
            </ul>
        </div>
    );
}

export default Navbar;