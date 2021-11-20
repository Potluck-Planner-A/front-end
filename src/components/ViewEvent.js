// Import dependencies
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosWithAuth from './../utils/axiosWithAuth';

//----------------  Styling Components  ----------------//
// Main container
const EventCont = styled.div`
    background-color: #fbfbfb;
    border-left: 2px dashed lightgrey;

    padding: 1%;

    h3{
        font-size: 1.6rem;
        padding: 0;
        margin: 0;
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
    width: 75%;
    margin: 0 2%
`;
// Divs container
const DivsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;
// PotluckInfo
const PotluckInfo = styled.div`
    width: 45%;
    
    h3 {
        padding-bottom: 20%;
    }
`;
// Food div
const FoodDiv = styled.div`
    border-left: 2px dashed lightgrey;
    border-right: 2px dashed lightgrey;
    padding-left: 10px;

    width: 45%;

    font-family: 'Antic', sans-serif;
    font-size: 1rem;

    ul {
    text-align: left;
    }
`;
// Button
const StyledButton = styled.button`
    border: 2px solid #e6db6a;
    border-radius: 10px;
    padding: 5px 0;

    width: 130px;
    
    color: black;
    font-family: 'Antic', sans-serif;
    font-size: 1.2rem;

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
    // State for foods
    const [foods, setFoods] = useState([]);

    //----------------  Creating Helpers  ----------------//
    // Toggle button on and off
    const toggleDetails = () => {
        setDetails(!details);
    };
    // Get foods from API
    const getFoods = () => {
        axiosWithAuth().get('https://buildweekpotlucklambda.herokuapp.com/api/foods')
            .then(res => {
                setFoods(res.data);
            })
            .catch(err => {
                // console.log(err.response)
            })
    };

    //----------------  Side Effects  ----------------//
    useEffect(() => {
        getFoods();
      }, []);
    
    // Render content
    return (
        <EventCont>
            <DetailsDiv>
                {details === true ? 
                        <DivsContainer className='details'>
                            <PotluckInfo>
                                <h3>{event.potluck_name}</h3>
                                <div>
                                    <p>{event.date}</p>
                                    <p>{event.time}</p>
                                    <LocationText>{event.location}</LocationText>
                                </div>
                            </PotluckInfo>
                            <FoodDiv>
                                <h3>Foods</h3>
                                {foods.map(food => {
                                    return (
                                        <ul>
                                            <li>{food.food_name}</li>
                                        </ul>
                                    )
                                })}
                            </FoodDiv>
                        </DivsContainer>
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