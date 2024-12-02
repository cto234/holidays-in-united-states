import spotifyLogo from '../images/spotify-logo.png'
import appleMusicLogo from '../images/apple-music-logo.png'
import bandcampLogo from '../images/bandcamp-logo.png'
import linedPaper from '../images/lined-paper.jpg'
import yellowLinedPaper from '../images/yellow-lined-paper.jpg'

const Music = () => {
    return(
       <div className="bg-cover bg-center"
        style={{ backgroundImage: `url(${linedPaper})` }}>"

            <div className='flex justify-center items-center pt-10'>
                <iframe 
                        src="https://open.spotify.com/embed/album/43Oc3iEE5Kp4bhuWAwYunq?utm_source=generator" 
                        width="40%" 
                        height="400" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy">
                </iframe>
            </div>
                <div className='flex justify-center w-1/3 mx-auto'>
                    <a href="https://open.spotify.com/artist/4Hx2EMq5CumzokenbyEcSM?si=bS3GaYJmQWGkgCLzNDH_Rw">
                        <img 
                        src={spotifyLogo}
                        alt="Spotify"
                        width={'100%'}
                        className="hover:opacity-80 pt--1"
                        />
                    </a>
                    <a href="https://music.apple.com/us/artist/holidays-in-united-states/1716624268">
                        <img 
                        src={appleMusicLogo}
                        alt="Apple Music"
                        width={'90%'}
                        className="hover:opacity-80 pt-1"
                        />
                    </a>
                    <a href="https://holidaysinunitedstates.bandcamp.com/album/holidays-in-united-states">
                        <img 
                        src={bandcampLogo}
                        alt="Bandcamp"
                        width={'90%'}
                        className="hover:opacity-80 pt-1"
                        />
                    </a>
            </div>
        </div>
    )
}

export default Music;