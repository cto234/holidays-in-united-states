import React from "react";
import Header from "./Header";
import Videos from "./Videos";
import Music from "./Music";
import Merch from "./Merch";
import Shows from "./Shows";

const Home = () => {
    return(
        <>
            <Header />
            <div className='home-section'>
                <h1 className='text-center text-5xl font-bold'>Holidays in United States</h1> {/* replace with logo */}
                <h2 className='text-center text-lg'>New York City Emo</h2>
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