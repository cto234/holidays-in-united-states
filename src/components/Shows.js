
import { useState, useEffect } from "react";
import stoneCircleFlyer from '../images/stone-circle-flyer.jpeg'

const Shows = () => {

    const shows = [
        {
            location: "Ray's Bar",
            date: "Nov 17, 2024",
            flyer: "",
            bands: [
                { name: "Autobahn", musicUrl: "https://www.youtube.com/watch?v=QFMv0HvMJqo&ab_channel=JarretWolfson" }
            ]
        },
        {
            location: "Stone Circle Theater",
            date: "Dec 8, 2024",
            flyer: stoneCircleFlyer,
            bands: [
                { name: "Oldstar", musicUrl: "https://open.spotify.com/artist/65EcXsR7j4l6Thkrr5a1AX?si=I5NB2chnS_CRgR6gOPXRNw" }
            ]
        }
    ];


    const [selectedFlyer, setSelectedFlyer] = useState(null);

    useEffect(() => {
        // Disable scrolling when modal is open
        if (selectedFlyer) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Clean up by resetting overflow when component unmounts
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedFlyer]);

    return (
        <div className="overflow-x-auto w-full max-w-2xl mx-auto my-8">
            <h1>Upcoming Shows</h1>
            <table className="min-w-full bg-white shadow-md rounded border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Location</th>
                        <th className="py-2 px-4 border-b">Date</th>
                        <th className="py-2 px-4 border-b">With</th>
                    </tr>
                </thead>
                <tbody>
                    {shows.map((show, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4 border-b text-blue-600 cursor-pointer hover:underline" onClick={() => setSelectedFlyer(show.flyer)}>
                                {show.location}
                            </td>
                            <td className="py-2 px-4 border-b">{show.date}</td>
                            <td className="py-2 px-4 border-b">
                                {show.bands.map((band, i) => (
                                    <a
                                        key={i}
                                        href={band.musicUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline mr-2"
                                    >
                                        {band.name}
                                    </a>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal for Flyer */}
            {selectedFlyer && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setSelectedFlyer(null)} // Close on clicking outside
                >
                    <div
                        className="relative bg-white p-4 rounded shadow-lg max-w-md w-full"
                        onClick={(e) => e.stopPropagation()} // Prevent close on clicking inside
                    >
                        <img src={selectedFlyer} alt="Show Flyer" className="w-full rounded" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Shows;
