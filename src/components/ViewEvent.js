// Import dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// I forgot to import ViewEvent into EventList, will fix that once EventList is merged to main

const ViewEvent = (props) => {
    //----------------  Setting States  ----------------//
    // ID used to identify the potluck, will probably be name/number
    const { eventId } = props;
    // Details that can be changed based on ID
    const [details, setDetails] = useState(null);

    //----------------  Side Effcts  ----------------//
    // Get potluck based on `eventId`
    useEffect(() => {
        axios.get(`http://API/${eventId}`)
            .then(res => {
                console.log(res);
                // setDetails will go here once API is acquired
            })
            .catch(err => {
                console.error(`Ruh roh! ${err}`);
            })
    });

    // Render componenent
    return (
        <div className='event-container'>
            {
                details === null ? <p>Loading...</p> :
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

// Since EventList has not been merged I'll wite the bits of code I need to add here but keep them commented out
// This is just so I can get work done while waiting on peer review

// ADD UNDER // -- Setting States -- //
/**
 * const [currentEventId, setCurrentEventId] = useState(null);
 */

// ADD UNDER // -- Creating Helpers -- //
/**
 * const openDetails = id => {
 *      setCurrentEventId(id);
 * };
 * const closeDetails = () => {
 *      setCurrentEventID(null);
 * };
 * 
 * const toggleDetails = () => {
        setDetails(!details);
        props.open();
    };
 */

// ADD TO RETURN STATEMENT
/**
 * <div className='event-details'>
 *      <button onClick={toggleDetails}>
 *          {details === false ? 'View Details' : 'Close"}
 *      </button>
 * 
 *      {details === true ? eventID && <ViewEvent
 *              eventId={ eventId }
 *              close={closeDetails} /> : ''}
 * </div>
 */

export default ViewEvent;