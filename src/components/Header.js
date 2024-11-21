import React from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import homeButton from '../handwriting/home-button.png'
import showsButton from '../handwriting/shows-button.png'
import videosButton from '../handwriting/videos-button.png'

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
        <div className="header-container w-full bg-slate-50 text-white flex justify-evenly py-4 sticky top-0 z-10">
            {/* Home Section */}
            <ScrollLink to="homeSection" smooth={true} duration={800}>
                <div className="home-button cursor-pointer hover:text-gray-300 w-24" onClick={scrollToTop}>
                  <img src={homeButton}></img>
                </div>
            </ScrollLink>
        
            {/* Video Section */}
            <ScrollLink to="videoSection" smooth={true} duration={800}>
                <div className="video-button cursor-pointer hover:text-gray-300 w-24 pt-3" onClick={scrollToVideos}>
                  <img src={videosButton}></img>
                </div>
            </ScrollLink>
        
            {/* Merch Section (WIP)
            <ScrollLink to="merchSection" smooth={true} duration={800}>
                <div className="merch-button cursor-pointer hover:text-gray-300" onClick={scrollToMerch}>Merch</div>
            </ScrollLink>
            */}
        
            {/* Shows Section */}
            <ScrollLink to="showsSection" smooth={true} duration={800}>
                <div className="shows-button cursor-pointer hover:text-gray-300 w-24 pt-2" onClick={scrollToShows}>
                  <img src={showsButton}></img>
                </div>
            </ScrollLink>
        </div>
    
    )
}

export default Header;