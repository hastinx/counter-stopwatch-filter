import React from 'react'

const ControlButton = (props) => {
    const StartButton = (
        <div className="btn-stopwatch btn-one btn-start"
            onClick={props.handleStart}>
            Start
        </div>
    );
    const ActiveButtons = (
        <div className="btn-grp">
            <div className="btn-stopwatch btn-two"
                onClick={props.handleReset}>
                Reset
            </div>
            <div className="btn-stopwatch btn-one"
                onClick={props.handlePauseResume}>
                {props.isPaused ? "Resume" : "Pause"}
            </div>
        </div>
    );
    return (
        <div className="Control-Buttons">
            <div>{props.active ? ActiveButtons : StartButton}</div>
        </div>
    )
}

export default ControlButton