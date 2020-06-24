import React from "react"

const Functions = () => {
    return(
        <div>
            <div className="functions">
                <div>
                    <img alt="Haptic Feedback" className="functions-image" src="https://s7test3.scene7.com/is/image/SIEPDC/adaptive-triggers-icon-03-en-15jun20?$native--t$"/>
                    <p className="functions-title">Haptic feedback</p>
                    <p className="functions-info">Experience haptic feedback via the DualSense wireless controller in select PS5 titles and feel the effects and impact of your in-game actions through dynamic sensory feedback. </p>
                </div>

                <div>
                    <img alt="Adaptive Triggers" className="functions-image" src="https://s7test3.scene7.com/is/image/SIEPDC/haptic-feedback-icon-03-en-15jun20?$native--t$"/>
                    <p className="functions-title">Adaptive triggers</p>
                    <p className="functions-info">Get to grips with immersive adaptive triggers, featuring dynamic resistance levels which simulate the physical impact of in-game activities in select PS5 games. </p>
                </div>
            </div>
            <a rel="noopener noreferrer" className="function-btn" href="https://www.playstation.com/en-us/ps5/accessories/" target="_blank">Find Out More</a>
        </div>
    )
}

export default Functions