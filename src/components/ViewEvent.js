// Import dependencies
import React, { useState, useEffect } from 'react'
import axios from 'axios';

// Here's where the styling will go

// Until proper stuff is set up to pull from I'll be using PokeAPI

// Exported component
const ViewEvent = (props) => {
    //----------------  Setting States  ----------------//
    // ID used to identify the potluck, will probably be name/number
    const { event } = props;
    // Details that can be changed based on ID
    const [details, setDetails] = useState(false);

    //----------------  Creating Helpers  ----------------//
    const toggleDetails = () => {
        setDetails(!details);
    };

     //----------------  Side Effcts  ----------------//
    
    // Render content
    return (
        <div>
            <button onClick={toggleDetails}>
                {details === false ? 'View Details' : 'Close'}
            </button>
            {details === true ? 
                    <h3>{event.name}</h3>
                : ''}
        </div>
    )
};

export default ViewEvent;

// Worked on by Amethyst :>