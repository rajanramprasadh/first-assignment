import React from "react";

import './UserOutput.css';

const userOutput = ( props ) => {
    return (
        <div className="UserOutput">
            <p>{props.userName}</p>
            <p>Above is my Username</p>
        </div>
    )
}

export default userOutput;