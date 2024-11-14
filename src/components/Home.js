import React from "react";
import Header from "./Header";
import Videos from "./Videos";
import Music from "./Music";
import Merch from "./Merch";
import Shows from "./Shows";
import hiusLogo from "../handwriting/hius-logo.png"
import nycEmo from '../handwriting/nyc-emo.png'

const Home = () => {
    return(
        <>
            <Header />
            <div className='home-section'>
                <img src={hiusLogo} className="w-1/3 mx-auto"></img>
                <img src={nycEmo} className="w-1/4 mx-auto"></img>
            </div>
            <div className='content-container'>
                <Music />
                <div id="videoSection"> <Videos id='videoSection'/> </div>
                {/* <Merch /> */}
                <div id="showsSection"> <Shows /> </div>
            </div>
        </>
    )
}

export default Home;