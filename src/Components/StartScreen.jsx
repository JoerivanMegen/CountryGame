import React from 'react';




export default function StartScreen() {
    return (
        <div className="main-container">
            <div className="start-container">
                <div className="start-title">
                        <h3>Welcome to Flaggle!</h3>
                </div>
                <div className="short-explanation">
                    <p> As soon as you click the start button below, the game starts.
                        To see the rules, you can click the info button in the top right corner.
                        <br/><br/>
                        <strong>IMPORTANT:</strong> when you click the start button, you will have limited time to answer the questions. Make sure you are ready!
                    </p>
                </div>
                <button className="start-button">START</button>
                <p></p>
            </div>
        </div>
    )
}
