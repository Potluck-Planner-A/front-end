// Import dependencies
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

// Here's where the styling will go

// Until proper stuff is set up to pull from I'll be using PokeAPI

// Exported component
const ViewEvent = () => {
    //----------------  Setting States  ----------------//
    // Initial event array (starts empty)
    const initialEvents = [];
    // Slice of state for events
    const [events, setEvents] = useState(initialEvents);

    //----------------  Creating Helpers  ----------------//
    // Grab events from API (currently grabbing from PokeAPI)
    const getEvents = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => {
                setEvents(res.data.results);
            })
            .catch(err => {
                console.error(`Ruh roh! ${err}`);
            })
    };

    //----------------  Side Effects  ----------------//
    // Acquire events
    useEffect(() => {
        getEvents();
      }, []);

    // Render content
    return (
        <div className='eventList'>
            {
                events.map(event => {
                    return (
                        <div className='events'>
                            <h2>{event.name}</h2>
                            <p>When the date is available it's go here</p>
                            <p>When the location is added it'll go here</p>
                            More Info {/* Will link to the ViewEvent */}
                        </div>
                    )
                })
            }
        </div>
    )
};

export default ViewEvent;

// Worked on by Amethyst :>