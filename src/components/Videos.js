import { useState } from "react";
import videosButton from '../handwriting/videos-button.png'
import leftArrow from '../handwriting/left-arrow.png'
import rightArrow from '../handwriting/right-arrow.png'

const Videos = () => {
    // State to track the current video index
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);


    const videoUrls = [
        'https://www.youtube.com/embed/5LbY7oKXjSk?si=zpxS83-LUTJ8zM-b',
        'https://www.youtube.com/embed/O9Ynw0ns98U?si=rVhWGf1CkxPv9wM9',
    ];

    //Navigation
    const prevVideo = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videoUrls.length) % videoUrls.length);
    };

    const nextVideo = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
    };

    return (
        <div className="relative w-full max-w-lg mx-auto">
            <img src={videosButton}></img>
            <div className="video-slide">
                <iframe
                    width="100%"
                    height="315"
                    src={videoUrls[currentVideoIndex]}
                    title={`Video ${currentVideoIndex + 1}`}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>

            {/* Navigation Buttons */}
            <img
                src={leftArrow}
                onClick={prevVideo}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white p-2 rounded-full"
            >
            </img>
            <img
                src={rightArrow}
                onClick={nextVideo}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white p-2 rounded-full"
            >
            </img>
        </div>
    );
};

export default Videos;
