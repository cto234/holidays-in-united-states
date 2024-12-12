import spotifyLogo from '../images/spotify-logo.png'
import appleMusicLogo from '../images/apple-music-logo.png'
import bandcampLogo from '../images/bandcamp-logo.png'
import doodles from '../images/doodles.jpg'


const Music = () => {
    return (
        <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${doodles})` }}
        >
            <div className="flex justify-center items-center pt-10 px-4">
                <iframe
                    src="https://open.spotify.com/embed/album/43Oc3iEE5Kp4bhuWAwYunq?utm_source=generator"
                    className="w-full pb-10 md:w-2/3 h-[500px] max-w-md"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>
            <div className="flex justify-center w-full md:w-1/2 mx-auto px-4 space-x-4">
                <a href="https://open.spotify.com/artist/4Hx2EMq5CumzokenbyEcSM?si=bS3GaYJmQWGkgCLzNDH_Rw">
                        <img 
                        src={spotifyLogo}
                        alt="Spotify"
                        className="hidden md:hover:opacity-80 pt--1 w-full max-w-[210px]"
                        />
                    </a>
                    <a href="https://music.apple.com/us/artist/holidays-in-united-states/1716624268">
                        <img 
                        src={appleMusicLogo}
                        alt="Apple Music"
                        className="hidden md:hover:opacity-80 pt-4 w-full max-w-[180px]"
                        />
                    </a>
                    <a href="https://holidaysinunitedstates.bandcamp.com/album/holidays-in-united-states">
                        <img 
                        src={bandcampLogo}
                        alt="Bandcamp"
                        className="hidden md:hover:opacity-80 pt-3 w-full max-w-[220px]"
                        />
                    </a>
            </div>
        </div>
    );
};

export default Music;
