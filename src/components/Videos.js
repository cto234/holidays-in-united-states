import { useState } from "react";

const Videos = () => {
    // State to track the current video index
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);


    const videoUrls = [
        'https://www.youtube.com/embed/5LbY7oKXjSk?si=zpxS83-LUTJ8zM-b', {/* TJ Byrne's */},
        'https://www.youtube.com/embed/O9Ynw0ns98U?si=rVhWGf1CkxPv9wM9', {/* Windjammer */}
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
            <h1>Videos</h1>
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
            <button
                onClick={prevVideo}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600"
            >
                &lt;
            </button>
            <button
                onClick={nextVideo}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600"
            >
                &gt;
            </button>
        </div>
    );
};

export default Videos;
