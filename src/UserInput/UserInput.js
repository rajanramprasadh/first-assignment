import React from 'react';

import './Userinput.css'

const userInput = ( props ) => {
    return (
        <div className="Userinput">
            <input type="text" onChange={props.onchange} value={props.username} />
        </div>
    )
}

export default userInput;