import React from "react";
import spiderman from "./images/spiderman-ps5.jpeg"
const Primary = () => {
    return(
        <div className="primary">

            <div className="primary-top">
                <h2 className="primary-top-title">The games you want</h2>
                <iframe title="primary" className="primary-video"  width="1000" height="560" src="https://www.youtube.com/embed/i76gPpka2Fo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


            </div>
                <div className="grid">
                    

                    <div className="grid-container">
                        <div className="grid-item-1">
                            <img className="primary-img" src={spiderman} alt="spiderman-miles-morales"/>
                            <h2 className="primary-title">Marvel's Spider-Man: Miles Morales</h2>
                            <p className="primary-info">Experience the rise of Miles Morales as the new hero masters incredible, 
                                explosive new powers to become his own Spider-Man.
                            </p>
                        </div>

                        <div className="grid-item-2">
                            <img className="primary-img"  alt="Horizon" src="https://s7test3.scene7.com/is/image/SIEPDC/ps5-horizon-forbidden-west-video-thumb-01-en-11jun20?$native$"/>
                            <h1 className="primary-title">Horizon Forbidden West</h1>
                            <p className="primary-info">Join Aloy as she braves the Forbidden West - a majestic but dangerous frontier that conceals 
                            mysterious new threats.
                            </p>
                        </div>

                    </div>


                    <div className="grid-container">
                        <div className="grid-item-1">
                            <img className="primary-img" alt="Ratchet" src="https://s7test3.scene7.com/is/image/SIEPDC/ps5-ratchet-and-clank-rift-apart-video-thumb-01-en-11jun20?$native$"/>
                            <h2 className="primary-title">Ratchet & Clank: Rift Apart</h2>
                            <p className="primary-info">Blast your way through an interdimensional adventure with Ratchet and Clank.
                            </p>
                        </div>

                        <div className="grid-item-2">
                            <img className="primary-img" alt="Gran Turismo" src="https://s7test3.scene7.com/is/image/SIEPDC/ps5-gt7-video-thumb-01-en-11jun20?$native$"/>
                            <h1 className="primary-title">Gran Turismo 7</h1>
                            <p className="primary-info">Gran Turismo™ 7 builds on 22 years of experience to bring you the best features from
                            the history of the franchise.
                            </p>
                        </div>

                    </div>

                    <div className="grid-container">
                        <div className="grid-item-1">
                            <img className="primary-img" alt="returnal" src="https://s7test3.scene7.com/is/image/SIEPDC/ps5-returnal-video-thumb-block-05-en-11jun20?$native$"/>
                            <h2 className="primary-title">Returnal</h2>
                            <p className="primary-info">Break the cycle of chaos on an always changing alien planet in this third-person roguelike shooter.
                            </p>
                        </div>

                        <div className="grid-item-2">
                            <img className="primary-img" alt="sackboy" src="https://s7test3.scene7.com/is/image/SIEPDC/ps5-sackboy-video-thumb-block-06-en-11jun20?$native$"/>
                            <h1 className="primary-title">Sackboy A Big Adventure</h1>
                            <p className="primary-info">Take Sackboy on an epic 3D platforming adventure with your friends.
                            mysterious new threats.
                            </p>
                        </div>

                    </div>

                </div>

                
            

        </div>
    )
}

export default Primary
