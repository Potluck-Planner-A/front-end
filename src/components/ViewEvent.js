// Import dependencies
import React, { useState, useEffect } from 'react'

// Here's where the styling will go

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
    
    // Render content
    return (
        <div>
            <button onClick={toggleDetails}>
                {details === false ? 'View Details' : 'Close'}
            </button>
            {details === true ? 
                    <div className='details'>
                        <h3>{event.name}</h3>
                        <p>Beep</p>
                        <p>Boop</p>
                    </div>
                : ''}
        </div>
    )
};

export default ViewEvent;

// Worked on by Amethyst :>