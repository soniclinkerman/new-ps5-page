import React from "react"

const MainGame = ({image, title, info, alt, background, backgroundImage, color}) => {
    return(
        <div 
        style={{backgroundColor: `${background}`, backgroundImage: `url(${backgroundImage})`, color: `${color}`}}
        className="maingame">
            <img src={image} alt={alt} className="maingame-img"/>
            <div className="maingame-main">
                <p className="maingame-title">{title}</p>
                <p className="maingame-info">{info}</p>
            </div>
        </div>
    )
}

export default MainGame
