import React from "react";
import Header from "./Header";
import Videos from "./Videos";
import Music from "./Music";
import Shows from "./Shows";
import hiusLogo from "../handwriting/hius-logo.png"
import nycEmo from '../handwriting/nyc-emo.png'
import darkLinedPaper from '../images/dark-lined-paper.jpg'
import linedPaper2 from '../images/lined-paper-2.jpg'

const Home = () => {
    return(
        <>
            <Header />
            <div className="bg-cover bg-center"
            style={{ backgroundImage: `url(${darkLinedPaper})` }}>"

                <img src={hiusLogo} className="w-1/3 mx-auto pt-8"></img>
                <img src={nycEmo} className="w-1/4 mx-auto p-4"></img>
            </div>
            <div className='content-container'>
                <Music />
                <div className="bg-cover bg-center" id="videoSection"
                    style={{ backgroundImage: `url(${linedPaper2})` }}> <Videos id='videoSection'/> </div>
                {/* <Merch /> */}
                <div id="showsSection"className="bg-cover bg-center">
                    <Shows /> </div>
            </div>
        </>
    )
}

export default Home;