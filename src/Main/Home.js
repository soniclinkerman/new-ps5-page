import React from "react";
import Navigation from "../components/Navigation/navigation";
import Top from "../components/Top/Top";
import Primary from "../components/Primary/primary";
import Simple from "../components/Simple/simple";
import Specs from "../components/Specs/specs";
import Newsletter from "../components/Newsletter/newsletter";
import Stunning from "../components/Stunning/stunning";
import Immersion from "../components/Immersion/immersion";
import Functions from "../components/Functions/functions";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
          
            <Navigation/>
            <Link to="/games" style={{padding: "1em"}}>Games</Link>
            <Link to="/accessories">Accessories</Link>
            <Top/>


            <Simple
            className="limits"
            title={"Play Has No Limits"}
            info={`Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support
            for haptic feedback, adaptive triggers and 3D Audio, and an all-new generation of incredible 
            PlayStation® games.`}
            video={"https://www.youtube.com/embed/RkC0l4iekYo"}
            />

            <Specs/>
            <Stunning/>

            <Primary/>
            <Immersion/>

            <Simple
            title={"Heighten Your Senses"}
            info={`The DualSense™ wireless controller for PS5 offers 
            immersive haptic feedback1, dynamic adaptive triggers1 and a built-in microphone,
            all integrated into an iconic design.`}
            video={"https://www.youtube.com/embed/SebzB8W3bVU"}
            />
            <Functions/>

            <Newsletter/>
           

        </div>
    )
}

export default Home
