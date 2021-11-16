// Import dependencies
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

// Here's where the styling will go

// Import component
import ViewEvent from './ViewEvent';

// Until proper stuff is set up to pull from I'll be using PokeAPI

// Exported component
const EventList = () => {
    //----------------  Setting States  ----------------//
    // Initial event array (starts empty)
    const initialEvents = [];
    // Slice of state for events
    const [events, setEvents] = useState(initialEvents);
    // Grab a specific part from events to set as ID
    const [eventId, setEventId] = useState(null);
    const [details, setDetails] = useState(false);

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

    const openDetails = id => {
        setEventId(id);
    };
    const closeDetails = () => {
        setEventId(null);
    };

    const toggleDetails = () => {
        setDetails(!details);
        openDetails(events.name);
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
                            <button onClick={toggleDetails}>
                                {details === false ? 'View Details' : 'Close'}
                            </button>

                            {
                                details === true ?
                                eventId && <ViewEvent eventId={eventId} close={closeDetails} />
                                : ''
                            }
                        </div>
                    )
                })
            }
        </div>
    )
};

export default EventList;

// Worked on by Amethyst :>