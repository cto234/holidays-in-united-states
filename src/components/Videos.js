import { useState } from "react";
import videosButton from '../handwriting/videos-button.png'
import leftArrow from '../handwriting/left-arrow.png'
import rightArrow from '../handwriting/right-arrow.png'

const Videos = () => {
    // State to track the current video index
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const videoUrls = [
        'https://www.youtube.com/embed/O9Ynw0ns98U?si=rVhWGf1CkxPv9wM9',
        'https://www.youtube.com/embed/5LbY7oKXjSk?si=zpxS83-LUTJ8zM-b',
        'https://www.youtube.com/embed/zuXWz4Q8-VA?si=SJcBnjd8zLU_Rvg_'
    ];

    // Navigation
    const prevVideo = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videoUrls.length) % videoUrls.length);
    };

    const nextVideo = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
    };

    return (
        <div className="relative w-full max-w-lg mx-auto">
            <img src={videosButton} alt="Videos Button" className="mx-auto w-1/3 pt-20 pb-5" />
            
            {/* Video display for mobile and desktop */}
            <div className="video-slide relative pb-10">

                {/* For Mobile: Show all videos in a column */}
                <div className="block md:hidden space-y-4">
                    {videoUrls.map((url, index) => (
                        <iframe
                            key={index}
                            className="w-[80vw] h-[45vw] mx-auto"
                            src={url}
                            title={`Video ${index + 1}`}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ))}
                </div>

                {/* For Desktop: Show one video at a time with arrows */}
                <div className="hidden md:block">
                    <iframe
                        className="w-[80vw] h-[45vw] mx-auto md:w-full md:h-[315px]"
                        src={videoUrls[currentVideoIndex]}
                        title={`Video ${currentVideoIndex + 1}`}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />

                    {/* Navigation Buttons (only on desktop) */}
                    <img
                        src={leftArrow}
                        onClick={prevVideo}
                        className="absolute top-1/2 left-[-150px] transform -translate-y-1/2 text-white p-2 rounded-full w-1/4 cursor-pointer hover:opacity-60"
                        alt="Previous Video"
                    />
                    <img
                        src={rightArrow}
                        onClick={nextVideo}
                        className="absolute top-1/2 right-[-150px] transform -translate-y-1/2 text-white p-2 rounded-full w-1/4 cursor-pointer hover:opacity-60"
                        alt="Next Video"
                    />
                </div>
            </div>
        </div>
    );
};

export default Videos;

