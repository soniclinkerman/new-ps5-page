import React from "react";
import Navigation from "../components/Navigation/navigation";
import Newsletter from "../components/Newsletter/newsletter";
import MainGame from "../components/Main_Game/MainGame";


const Games = () => {
    return(
        <div className="games">
            <Navigation/>

            <div className="games-top">
            <img className="games-img" alt="Spiderman" src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-background-block-desktop-01-en-11jun20?$1600px$"/>

            <div className="games-sec">
            <img alt="Spiderman"className="games-logo" src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-badge-02-en-11jun20?$native--t$" />
            <p className="games-title">The games you want</p>
            </div>

            </div>

            


            <h2 className="primary-top-title">The games you want</h2>
                <iframe title="primary" className="primary-video"  width="1000" height="560" src="https://www.youtube.com/embed/i76gPpka2Fo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

           <MainGame
           background={"#EEEEEE"}
           //backgroundImage={"https://gmedia.playstation.com/is/image/SIEPDC/ps5-hzw-section-background-3840x1080-01-en-120620.jpg_R?$2400px$"}
           alt="Marvel's SpiderMan: Miles Morales"
           image={"https://gmedia.playstation.com/is/image/SIEPDC/ps5-spiderman-video-thumb-block-8-en-110620?$native$"}
           title={"Marvel's Spider-Man: Miles Morales"}
           info={"Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man."}
           />

           <MainGame
           color={"#fff"}
           backgroundImage={"https://gmedia.playstation.com/is/image/SIEPDC/ps5-hzw-section-background-3840x1080-01-en-120620.jpg_R?$2400px$"}
           alt="Horizon Forbidden West"
           image={"https://gmedia.playstation.com/is/image/SIEPDC/ps5-hzd-video-thumb-block-05-en-110620?$native$"}
           title={"Horizon Forbidden West"}
           info={"Join Aloy as she braves the Forbidden West - a majestic but dangerous frontier that conceals mysterious new threats."}
           />

           <MainGame
           alt="Ratchet & Clank: Rift Apart"
           image={"https://gmedia.playstation.com/is/image/SIEPDC/ps5-ratchet_clank-video-thumb-block-06-en-110620?$native$"}
           title={"Ratchet & Clank: Rift Apart"}
           info={"Blast your way through an interdimensional adventure with Ratchet and Clank."}
           />

           <MainGame
           color={"#fff"}
           backgroundImage={"https://gmedia.playstation.com/is/image/SIEPDC/ps5-gt7-section-background-3840x1080-01-en-120620.jpg_R?$2400px$"}
           alt="Gran TurismoTM 7"
           image={"https://gmedia.playstation.com/is/image/SIEPDC/ps5-gt7-video-thumb-block-07-en-110620?$native$"}
           title={"Gran TurismoTM 7"}
           info={"Gran Turismo 7 builds on 22 years of experience to bring you the best features from the history of the franchise."}
           />

            <div className="notable">
                <div>
                <h3 className="notable-title">Stunning Games</h3>
                </div>

                <div className="notable-games">

                    <div className="notable-1">
                        <p>Astro's Playroom</p>
                        <p>Bugsnax</p>
                        <p>DEATHLOOP</p>
                        <p>Demon's Souls</p>
                        <p>Destruction AllStars</p>
                        <p>GhostWire: Tokyo</p>
                        <p>Godfall™ </p>
                        <p>Goodbye Volcano High</p>
                        <p>Gran Turismo 7</p>
                        <p>Grand Theft Auto V & Online</p>
                    </div>

                    <div className="notable-2">
                        <p>HITMAN 3 </p>
                        <p>Horizon Forbidden West</p>
                        <p>JETT : The Far Shore®</p>
                        <p>Kena: Bridge of the Spirits</p>
                        <p>Little Devil Inside</p>
                        <p>Marvel's Spider-Man: Miles Morales</p>
                        <p>NBA 2K21</p>
                        <p>Oddworld Soulstorm™</p>
                        <p>Pragmata</p>
                    </div>

                    <div className="notable-3">
                        <p>Project Athia (working title)</p>
                        <p>Ratchet & Clank: Rift Apart</p>
                        <p>Resident Evil 8</p>
                        <p>Returnal</p>
                        <p>Sackboy A Big Adventure</p>
                        <p>Solar Ash</p>
                        <p>Stray</p>
                        <p>The Pathless</p>
                        <p>Tribes of Midgard</p>
                    </div>

                </div>
            </div>

            <Newsletter/>
        </div>
    )
}

export default Games
