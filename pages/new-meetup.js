import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetupPage() {
    const addMeetupHandler = (enteredMeetupData) => {
        console.log(enteredMeetupData);
    }

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
  )
}

export default NewMeetupPage