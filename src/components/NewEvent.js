import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addEvent } from './../actions/eventActions'

  const StyledBackground = styled.div`
  background-image: url("https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Dishes_at_Potluck.jpg");
  height: 100vh;
  background-size: cover;
  @media (max-width: 1200px) {
      background-size: contain;
  }
`
  const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  `
  const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px;
  margin: 50px auto 0;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 15px;
  color: #808000;
  height: auto;
  border: black solid 1.5px;
  @media (max-width: 1200px) {
      margin: 50px auto;
      padding: 30px;
  }
  `
  const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  margin: 5px;
  justify-content: space-between;
  height: auto;
  border-radius: 15px;
  @media (max-width: 400px) {
      flex-direction: column;

  }
  `

const StyledButton = styled.label`
display: flex;
flex-direction: row;
margin: 12px;
justify-content: center;
height: 20px;
`

const NewEvent = (props) => {

    useEffect(() => {
        props.addEvent(potluck)
    }, [])

    const [ formValues, setFromValues ] = useState({name: '', organizer: '', date: '', location: '', guests: '', food: ''});
    const [ potluck, setPotluck ] = useState([]);

    const submit = (evt) => {
        evt.preventDefault();
        const newPotluck = {
            name: formValues.name,
            organizer: formValues.organizer,
            date: formValues.date,
            location: formValues.location,
            guests: formValues.guests,
            food: formValues.food,
        }
        setPotluck([...newPotluck, newPotluck])
        setFromValues({name: '', organizer: '', date: '', location: '', guests: '', food: ''})
        
    }

    const change = (evt) => {
        const {name, value} = evt.target;
        setFromValues({...formValues, [name]: value})
        console.log(potluck)
    }

    return (
        <StyledBackground>
        <StyledDiv>
            <StyledForm onSubmit={submit}>
            <h2>Start Planning!</h2>
            <StyledLabel>
                <p>Title:</p>
                    <input
                        value={formValues.name}
                        name="name"
                        type="text"
                        onChange={change}
                        placeholder="Enter your name"
                    />
                </StyledLabel>
                <StyledLabel>
                    <p>Organizer:</p> 
                    <input
                        value={formValues.organizer}
                        name="organizer"
                        type="text"
                        onChange={change}
                        placeholder="Organizer of Potluck"
                    />
                </StyledLabel>
                <StyledLabel>
                    <p>Date:</p> 
                    <input
                        value={formValues.date}
                        name="date"
                        type="text"
                        onChange={change}
                        placeholder="Date of Potluck"
                    />
                </StyledLabel>
                <StyledLabel>
                    <p>Location:</p> 
                    <input
                        value={formValues.location}
                        name="location"
                        type="text"
                        onChange={change}
                        placeholder="Address of Location"
                    />
                </StyledLabel>
                <StyledLabel>
                    <p>Add Guests:</p>
                    <input
                        value={formValues.guests}
                        name="guests"
                        type="text"
                        onChange={change}
                        placeholder="Invite Guests"
                    />
                </StyledLabel>
                <StyledLabel>
                    <p>Food Items:</p>
                    <input
                        value={formValues.food}
                        name="food"
                        type="text"
                        onChange={change}
                        placeholder="Add Food Items"
                    />
                </StyledLabel>
                <StyledButton>
                    <input type="submit" value="Add a Potluck" />
                </StyledButton>
            </StyledForm>
            <div>
                {/* {potluck.map(item => {
                    return <div>{item}</div>
                })} */}
            </div>
        </StyledDiv>
        </StyledBackground>
    )
}

// const mapStateToProps = state => {

// }

export default connect(null, { addEvent })(NewEvent)