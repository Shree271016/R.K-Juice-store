import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../../API/authAPI'
import { addCategory } from '../../../API/categoryAPI'
// import { addcategory } from '../../../API/categoryAPI'
const AddCategory = () => {
  let [category,setCategory] = useState('')
  let [error, setError] = useState('')
  let [success, setSuccess] = useState(false)

  const {token} = isAuthenticated()

  const handleSubmit = e =>{
  e.preventDefault()
  console.log(category)
    addCategory(category, token)
      // add garna lai token legera authencate garera backend ma send garxa
      .then(data => {
        if (data.error) {
          setError(data.error)
          setSuccess(false)
        }
        else {
          setSuccess(true)
          setError('')
        }
        // console.log(data)
      })
  }

  const showError = () => {
    if (error) {
      return <div className='alert alert-danger'>{error}</div>
    }
  }
  const showSuccess = () => {
    if (success) {
      return <div className='alert alert-success'> Category Added Successfully.</div>
    }
  }

  return (
    <>

      <h3>Add Category</h3>
      <form className='m-3 p-5 shadow-lg'>

        <Link to={'/admindashboard/category'}> Back</Link>
        <br />

        {showError()}
        {showSuccess()}
        
        <label htmlFor="category">Category Name</label>
        <input type="text" id='category' className='form-control mb-2 ' onChange={e => setCategory(e.target.value)} />
        <button className='btn btn-warning w-100' onClick={handleSubmit}>Add new Category</button>
      </form>

    </>
  )

}

export default AddCategory