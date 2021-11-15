import React, { useState } from 'react'

const fakeData = [
  {date: '11/28/2021',
  location: '4231 Westover St Georgetown, SD, 54063',
  guests: ['Millie', 'Maggie', 'Melvin', 'Murry', 'Murphy'],
  food: ['Potatoes & Gravy', 'Roles', 'Ham', 'Drinks', 'stuffing']},
  {date: '11/28/2021',
  location: '4231 Westover St Georgetown, SD, 54063',
  guests: ['Millie', 'Maggie', 'Melvin', 'Murry', 'Murphy'],
  food: ['Potatoes & Gravy', 'Roles', 'Ham', 'Drinks', 'stuffing']}, 
  {date: '11/28/2021',
  location: '4231 Westover St Georgetown, SD, 54063',
  guests: ['Millie', 'Maggie', 'Melvin', 'Murry', 'Murphy'],
  food: ['Potatoes & Gravy', 'Roles', 'Ham', 'Drinks', 'stuffing']},]

const NewEvent = () => {

    const [ formValues, setFromValues ] = useState({date: '', location: '', guests: '', food: ''})

    const submit = (evt) => {
        evt.preventDefault();
        const newPotluck = {
            date: formValues.date.trim(),
            location: formValues.location.trim(),
            guests: formValues.guests.trim(),
            food: formValues.food.trim(),
        }

    }

    return (
        <div>
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
            </form>
        </div>
    )
}

export default NewEvent