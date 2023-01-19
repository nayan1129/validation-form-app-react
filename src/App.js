import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [Values, Setvalue] = useState({
    firstname: '',
    lastname: '',
    email: ''
  })

  const [submitted, Setsubmitted] = useState(false)
 
  const [valid , Setvalid] = useState(false) 

  const handleChangeFirstname = (event) => {
    Setvalue({
      ...Values,
      firstname: event.target.value
    })
  }
  const handleChangelastname = (event) => {
    Setvalue({
      ...Values, lastname: event.target.value
    })
  }
  const handleChangeEmail = (event) => {
    Setvalue({
      ...Values, email: event.target.value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if(Values.firstname && Values.lastname && Values.email ){
      Setvalid(true)
    }
    Setsubmitted(true)
  }
  return (
    <>
      <div className="form-container">
        <form action="" className="register-form" onSubmit={handleSubmit} >
          {submitted && valid ? <div className='success-message'> Success! Thank you for Registering </div> : null}
          <input type="text" className="form-field" placeholder='First Name'
            name='firstName' value={Values.firstname} onChange={handleChangeFirstname} />
          {submitted && !Values.firstname ? <span>Please enter your first Name name</span> : null}
          <input type="text" className="form-field" placeholder='Last Name'
            name='lastName' value={Values.lastname} onChange={handleChangelastname} />
          {submitted && !Values.lastname ? <span>Please enter your last Name name</span> : null}
          <input type="text" className="form-field" placeholder='Email'
            name='email' value={Values.email} onChange={handleChangeEmail} />
          {submitted && !Values.email ? <span>Please enter your Email name</span> : null}
          <button className='form-filed' type='submit' >Register</button>
        </form>
      </div>
    </>
  )
}

export default App
