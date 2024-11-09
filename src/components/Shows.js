import { useState, useEffect } from "react";
import stoneCircleFlyer from '../images/stone-circle-flyer.jpeg';
import babysFlyer from '../images/babys-flyer.png';
import branchingOutFlyer from '../images/branching-out-flyer.jpeg';
import rubaladFlyer from '../images/rubalad-flyer.jpeg';
import windjammerFlyer from '../images/windjammer-flyer.jpeg';
import ttjFlyer from '../images/ttj-flyer.jpeg';

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

    const previousShows = [
        {
            location: "Baby's All Right",
            date: "Oct 28, 2024",
            flyer: babysFlyer,
            bands: [
                { name: "Epoxy", musicUrl: "https://open.spotify.com/artist/3rBOp0vbEpJFWfkIXzmuRo?si=-6w_q121RhewP9IGCON2Ow" },
                {name: "My Transparent Eye", musicUrl: "https://open.spotify.com/artist/6D9BQI3d6y8lOkC6EB7lkU?si=8PmVxRERSk6vAy2yIU7nRQ" }
            ]
        },
        {
            location: "Branching Out release show",
            date: "Oct 18, 2024",
            flyer: branchingOutFlyer,
            bands: [
                { name: "Branching Out", musicUrl: "https://open.spotify.com/artist/3IR9TifwihzbkmOtDJDQVN?si=aHIqIEjtTfuVhGk0VE9pxQ" },
                { name: "The Dallas Cowboys", musicUrl: "https://open.spotify.com/artist/6WgBEhg2Pn2pY9SmSmKypa?si=jYeUVzL-Qm6ocMAUYlWKVg" },
                { name: "Xcotland", musicUrl: "https://open.spotify.com/artist/4yMTkUPWTFah9OMmy4gZOd?si=H42hGig-TVSahYlwJfTulg" }
            ]
        },
        {
            location: "Rubalad",
            date: "Sep 4, 2024",
            flyer: rubaladFlyer,
            bands: [
                { name: "Debris Bardot", musicUrl: "https://on.soundcloud.com/ngyeeq4fT5bvcrem9" },
                { name: "The Kippers", musicUrl: "https://thekippers.bandcamp.com/" }
            ]
        },
        {
            location: "The Windjammer",
            date: "Aug 31, 2024",
            flyer: windjammerFlyer,
            bands: [
                { name: "Superfan", musicUrl: "https://open.spotify.com/artist/3BO07jDo7Qs7qNLdwRoISM?si=jtekrOH2RouFy98sO-V19g" },
                { name: "Harry Teardrop", musicUrl: "https://open.spotify.com/artist/3AIYyng1ByLhJC6TimwJJV?si=rJrc0OkdTreoSRrmqPITfQ" },
                { name: "Scarlet Rae", musicUrl: "https://open.spotify.com/artist/06v4QDLJOrIz62gsU9lN3K?si=7BG-WsgYQcGKspf4e4ppZw" }
            ]
        },
        {
            location: "Baby's All Right / DC9",
            date: "Aug 11-12, 2024",
            flyer: ttjFlyer,
            bands: [
                { name: "Superfan", musicUrl: "https://open.spotify.com/artist/3BO07jDo7Qs7qNLdwRoISM?si=jtekrOH2RouFy98sO-V19g" }
            ]
        },
    ];

    const [selectedFlyer, setSelectedFlyer] = useState(null);
    const [showPreviousShows, setShowPreviousShows] = useState(false);

    useEffect(() => {
        if (selectedFlyer) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

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

            <button
                onClick={() => setShowPreviousShows(!showPreviousShows)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                {showPreviousShows ? "Hide Previous Shows" : "Show Previous Shows"}
            </button>

            {showPreviousShows && (
                <table className="min-w-full bg-white shadow-md rounded border border-gray-200 mt-4">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Location</th>
                            <th className="py-2 px-4 border-b">Date</th>
                            <th className="py-2 px-4 border-b">With</th>
                        </tr>
                    </thead>
                    <tbody>
                        {previousShows.map((show, index) => (
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
            )}

            {selectedFlyer && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setSelectedFlyer(null)}
                >
                    <div
                        className="relative bg-white p-4 rounded shadow-lg max-w-md w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img src={selectedFlyer} alt="Show Flyer" className="w-full rounded" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Shows;