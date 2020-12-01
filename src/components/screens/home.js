import React from 'react';
import '../allcss/home.css';
import Post from './post';


function Home (){
    return(
        <div className ="home">
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Home;