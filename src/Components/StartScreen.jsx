import React from 'react'

export default function StartScreen() {
    return (
        <div className="main-container">
            <div className="start-container">
                <div className="info-button">
                    {/* insert modal functionality */}
                </div>
                <div className="start-title">
                    Start
                </div>
                <div className="short-explanation">
                    <h3>Welcome to Flaggle!</h3>
                    <p> As soon as you click the start button below, the game starts.
                        <br/>
                        To see the rules, you can click the info button in the top right corner.
                        <br/><br/>
                        <strong>IMPORTANT:</strong> when you click the start button, you will have limited time to answer the questions. Make sure you are ready!
                    </p>
                </div>
            </div>
        </div>
    )
}
