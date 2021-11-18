// Import dependencies
import React, { useState } from 'react';
import styled from 'styled-components';

//----------------  Setting States  ----------------//
// Main container
const EventCont = styled.div`
    background-color: #fbfbfb;
    border: 1.5px solid black;
    border-radius: 20px;

    padding: 1%;

    h3{
        font-size: 1.6rem;
    }
    p {
        font-size: 1.2rem;
    }

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
`;
// Inner divs
const ButtonDiv = styled.div`
    border: 2px blue solid
    margin: 0 2%
`;
// Details div
const DetailsDiv = styled.div`
    width: 60%;
    margin: 0 2%
`;
// Button
const StyledButton = styled.button`
    width: 120px;

    color: black;
    font-family: 'Antic', sans-serif;

    border: 1px solid #e6db6a
    border-radius: 10px;

    background-color: #e6db6a;
`;
// Location text but again
const LocationText = styled.span`
    color: grey;
    font-style: italic;
    font-size: 1.2rem;
`;

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
        <EventCont>
            <DetailsDiv>
                {details === true ? 
                        <div className='details'>
                            <h3>{event.potluck_name}</h3>
                            <p>{event.date}</p>
                            <p>{event.time}</p>
                            <LocationText>{event.location}</LocationText>
                        </div>
                    : ''}
            </DetailsDiv>
            <ButtonDiv className='button'>
                <StyledButton onClick={toggleDetails}>
                    {details === false ? 'View Details' : 'Close'}
                </StyledButton>
            </ButtonDiv>
        </EventCont>
    )
};

export default ViewEvent;

// Worked on by Amethyst :>