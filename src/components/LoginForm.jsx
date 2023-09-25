import React, { useState } from 'react'
import { useActionData, useNavigate } from 'react-router-dom'
import { authenticate, login } from '../API/authAPI'

const LoginForm = () => {
  let[email,setEmail] = useState('')
  
  let [password, setPassword] = useState('')

  let [error, setError] = useState('')
  let [success, setSuccess] = useState(false)

let navigate = useNavigate()



  const handleLogin = (e) =>{
    e.preventDefault()
    login({email,password})
    .then(data=>{
      if (data.error){
        setError(data.error)
        setSuccess(false)
      }
      else{
        authenticate(data )
        setError('')
        setSuccess(true)

      }
    })
  }

  const showError=()=>{
    if (error){
      return <div className='alert alert-danger'>{error}</div>
    }
  }

const redirect = ()=>{
  if (success){

    return navigate('/')
  }
}


  return (
    <>
      <main className="form-signin w-=100 m-auto p-3">
        <form>
          <div className="text-center">
          <img className="mb-4" src="./Category_images/sk.png" alt="" width="72" height="57"/>
          </div>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
           {showError}
            {redirect}

            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)}/>
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                <label for="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"/> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleLogin}>Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
      </main>
    </>
  )
}

export default LoginForm