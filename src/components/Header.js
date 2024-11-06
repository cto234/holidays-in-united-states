import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Header = () => {

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 800,
            smooth: 'easeInOutQuad'
        });
    };

    const scrollToVideos = () => {
        scroll.scrollTo('videoSection', {
          duration: 800,
          smooth: 'easeInOutQuad',
        });
      };

    const scrollToMerch = () => {
        scroll.scrollTo('merchSection', {
          duration: 800,
          smooth: 'easeInOutQuad',
        });
      };

    const scrollToShows = () => {
        scroll.scrollTo('showsSection', {
          duration: 800,
          smooth: 'easeInOutQuad',
        });
      };

    return (
        <div className="header-container w-full bg-gray-800 text-white flex justify-evenly py-4">
        {/* Home Section */}
        <ScrollLink to="homeSection" smooth={true} duration={800}>
            <div className="home-button cursor-pointer hover:text-gray-300" onClick={scrollToTop}>Home</div>
        </ScrollLink>
    
        {/* Video Section */}
        <ScrollLink to="videoSection" smooth={true} duration={800}>
            <div className="video-button cursor-pointer hover:text-gray-300" onClick={scrollToVideos}>Videos</div>
        </ScrollLink>
    
        {/* Merch Section */}
        <ScrollLink to="merchSection" smooth={true} duration={800}>
            <div className="merch-button cursor-pointer hover:text-gray-300" onClick={scrollToMerch}>Merch</div>
        </ScrollLink>
    
        {/* Shows Section */}
        <ScrollLink to="showsSection" smooth={true} duration={800}>
            <div className="shows-button cursor-pointer hover:text-gray-300" onClick={scrollToShows}>Shows</div>
        </ScrollLink>
    </div>
    
    )
}

export default Header;