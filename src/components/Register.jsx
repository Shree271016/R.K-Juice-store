import React, { useState } from 'react'
import { register } from '../API/authAPI'

const Register = () => {
  let [userName, setUsername] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')


  let [error, setError] = useState('')
  let [success, setSuccess] = useState(false)


  const handleSubmit = (e) => {
    // to stop from submitting
    e.preventDefault()
    register(userName, email, password)
      .then(data => {
        if (data.error) {
          setError(data.error)
          setSuccess(false)
        }
        else {
          setError('')
          setSuccess('true')
        }
      })
  }

  const showError = () => {
    if (error) {
      return <div className='alert alert-danger'>{error}</div>
    }
  }
  const showSuccess = () => {
    if (success) {
      return <div className='alert alert-success'> User Register Successfully.</div>
    }
  }


  return (
    <>

      <main className="form-signin w-=100 m-auto p-3">
        <form>
          <div className="text-center">
            <img className="mb-4" src="https://www.shutterstock.com/image-vector/red-vector-banner-register-now-260nw-1470612773.jpg" alt="" width="90" height="65" />
          </div>
          <h1 className="h3 mb-3 fw-normal">Register</h1>
          {showError()}
          {showSuccess()}


          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="UserName" onChange={e => setUsername(e.target.value)} />
            <label for="floatingInput" >User Name</label>
          </div>
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> I Accept The Term And Conditon
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Register</button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
      </main>
    </>


  )
}

export default Register