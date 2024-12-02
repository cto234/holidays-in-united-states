import { useState, useEffect } from "react";
import upcomingShows from '../handwriting/upcoming-shows.png'
import stoneCircleFlyer from '../images/stone-circle-flyer.jpeg';
import babysFlyer from '../images/babys-flyer.png';
import branchingOutFlyer from '../images/branching-out-flyer.jpeg';
import rubaladFlyer from '../images/rubalad-flyer.jpeg';
import windjammerFlyer from '../images/windjammer-flyer.jpeg';
import ttjFlyer from '../images/ttj-flyer.jpeg';
import raysFlyer from '../images/rays-flyer.jpeg'
import rippedPaper from '../images/ripped-paper.png'

const Shows = () => {
    const shows = [
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
            location: "Ray's Bar",
            date: "Nov 17, 2024",
            flyer: raysFlyer,
            bands: [
                { name: "Push Ups", musicUrl: "https://open.spotify.com/artist/4FfErbZ5piaImVT2YTdA1z?si=geIbc2X7SQimaBt_qWcuFA" },
                { name: "Zachshots", musicUrl: "https://open.spotify.com/artist/4eD7ODnvaXfX9XCBxtvjSc?si=yImK71aXSK2pbYo_O6kFcw" }
            ]
        },
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
        <div className="overflow-x-auto w-full max-w-2xl mx-auto my-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${rippedPaper})` }}>

            <img src={upcomingShows} alt='Upcoming Shows' className="mx-auto w-1/2 pt-20 pb-5"></img>
            <table className="min-w-full rounded mt-4 font-alteHaas bg-transparent">
                <thead>
                    <tr>
                        <th className="py-2 px-4 text-left">Location</th>
                        <th className="py-2 px-4 text-left">Date</th>
                        <th className="py-2 px-4 text-left">With</th>
                    </tr>
                </thead>
                <tbody>
                    {shows.map((show, index) => (
                        <tr key={index}>
                            <td
                                className="py-2 px-4 text-blue-600 cursor-pointer hover:underline"
                                onClick={() => setSelectedFlyer(show.flyer)}
                            >
                                {show.location}
                            </td>
                            <td className="py-2 px-4">{show.date}</td>
                            <td className="py-2 px-4">
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

            <div className="flex justify-center">
                <button
                    onClick={() => setShowPreviousShows(!showPreviousShows)}
                    className="mt-4 px-4 py-2 underline"
                >
                    {showPreviousShows ? "Hide Previous Shows" : "Show Previous Shows"}
                </button>
            </div>


            {showPreviousShows && (
                <table className="min-w-full rounded mt-4 font-alteHaas bg-transparent">
                <tbody>
                    {previousShows.map((show, index) => (
                        <tr key={index}>
                            <td
                                className="py-2 px-4 text-blue-600 cursor-pointer hover:underline"
                                onClick={() => setSelectedFlyer(show.flyer)}
                            >
                                {show.location}
                            </td>
                            <td className="py-2 px-4">{show.date}</td>
                            <td className="py-2 px-4">
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
                        className="relative p-4 rounded shadow-lg max-w-md w-full"
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
