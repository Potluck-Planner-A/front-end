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
    const [details, setDetails] = useState(null);
    const [detailsCont, setDetailsCont] = useState(false);
    const [eventId, setEventId] = useState(event.name);

    //----------------  Creating Helpers  ----------------//
    const closeDetails = () => {
        setEventId(null);
    };
    const openDetails = id => {
        setEventId(id);
    };

    const toggleDetails = () => {
        setDetailsCont(!detailsCont);
        openDetails(event.name);
    };

     //----------------  Side Effcts  ----------------//
    // Get potluck based on `eventId`
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${eventId}`)
            .then(res => {
                console.log(res);
                // setDetails will go here once API is acquired
            })
            .catch(err => {
                console.error(`Ruh roh! ${err}`);
            })
    }, [eventId]);

    // Render content
    return (
        <div className='event-container'>
            <button onClick={toggleDetails}>
                {details === false ? 'View Details' : 'Close'}
            </button>
            {
                details === null ? '' :
                <div>
                    <h3>EVENT NAME</h3>
                    <p>If including the name of the event planner in the object it will go here, if not this will be deleted</p>

                    <div className='inner-container when-where'>
                        <h2>DATE</h2>
                        <h3>LOCATION</h3>
                    </div>

                    <div className='inner-container food'>
                        <ul>
                            <li>MAP OVER FOOD ARRAY</li>
                        </ul>
                    </div>

                    <div className='inner-container guests'>
                        <ul>
                            <li>MAP OVER GUESTS ARRAY</li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
};

export default ViewEvent;

// Worked on by Amethyst :>