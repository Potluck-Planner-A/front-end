import React, { useState } from 'react'

const fakeData = [
  {date: '11/28/2021',
  location: '4231 Westover St Georgetown, SD, 54063',
  guests: ['Millie', 'Maggie', 'Melvin', 'Murry', 'Murphy'],
  food: ['Potatoes & Gravy', 'Roles', 'Ham', 'Drinks', 'stuffing']},
  {date: '11/27/2021',
  location: '4231 Westover St Georgetown, SD, 54063',
  guests: ['Millie', 'Maggie', 'Melvin', 'Murry', 'Murphy'],
  food: ['Potatoes & Gravy', 'Roles', 'Ham', 'Drinks', 'stuffing']}, 
  {date: '11/24/2021',
  location: '4231 Westover St Georgetown, SD, 54063',
  guests: ['Millie', 'Maggie', 'Melvin', 'Murry', 'Murphy'],
  food: ['Potatoes & Gravy', 'Roles', 'Ham', 'Drinks', 'stuffing']},]

const NewEvent = () => {

    const [ formValues, setFromValues ] = useState({date: '', location: '', guests: '', food: ''});
    const [ potluck, setPotluck ] = useState(fakeData);

    const submit = (evt) => {
        evt.preventDefault();
        const newPotluck = {
            date: formValues.date.trim(),
            location: formValues.location.trim(),
            guests: formValues.guests.trim(),
            food: formValues.food.trim(),
        }
        setPotluck(potluck.concat(newPotluck))
        setFromValues({date: '', location: '', guests: '', food: ''})
    }

    const change = (evt) => {
        const {name, value} = evt.target;
        setFromValues({...formValues, [name]: value})
    }

    return (
        <div>
            <h2>Potluck Planner</h2>
            <form onSubmit={submit}>
                <label>Date:
                    <input
                        value={formValues.date}
                        name="date"
                        type={text}
                        onChange={change}
                        placeholder="Date of Potluck"
                    />
                </label>
                <label>Location:
                    <input
                        value={formValues.location}
                        name="location"
                        onChange={change}
                        placeholder="Address of Location"
                    />
                </label>
                <label>Add Guests:
                    <input
                        value={formValues.guests}
                        name="guests"
                        onChange={change}
                        placeholder="Invite Guests"
                    />
                </label>
                <label>Food Items:
                    <input
                        value={formValues.food}
                        name="food"
                        onChange={change}
                        placeholder="Add Food Items"
                    />
                </label>
                <input type="submit" value="Add a potLuck" />
            </form>
        </div>
    )
}

export default NewEvent