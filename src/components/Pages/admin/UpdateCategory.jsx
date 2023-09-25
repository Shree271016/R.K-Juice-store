import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { isAuthenticated } from '../../../API/authAPI'
import { getCategoryDetails, updatecategory  } from '../../../API/categoryAPI'
// import { addcategory } from '../../../API/categoryAPI'
const UpdateCategory = () => {
  let [category, setCategory] = useState('')
  let [error, setError] = useState('')
  let [success, setSuccess] = useState(false)

  const { token } = isAuthenticated()
  // token legekoo jasjai useparams bata id lene (object return hunxa)/Id ko value dine
  const { id } = useParams()  /*(D3)*/
  // destructure garera id legyo


  useEffect(() => {
    // (D2)

    // useEffect ma aghi ko get detail call garnu paryo
    // Id pass garnu paryo
    getCategoryDetails(id) /*D4*/
      // Id Url bata line /url MyRoute ma k xa herne (category/edit/:id)
      .then(data => {
        // id aaepachi conslole ma log garne data aaepachi
        // backend run garna sakena =vhane error aaune
        if (data.error) {
          console.log(error)
        }
        else {
          // Error xaen vhane setCategory ma data.category_name Save garne paryo
          // data matra garna object aauxa so-= data.category_name garda Object vitra ko value aauxa 
          setCategory(data.category_name)
          // >aaba data lai form ko Iput type Text ma Display garnu paryo
        }
      })
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    
    updatecategory(id, category, token)
      // category & token pass garnu paryo 
      .then(data => {
        // BackEnd bata data ma Error aayo vhane Error aaunu paryo 
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
  // Error vhyo vhnya Error Display> Garne 
  const showError = () => {
    if (error) {
      return <div className='alert alert-danger'>{error}</div>
    }
  }
  // Success vayo Vhane Success Display garne 
  const showSuccess = () => {
    if (success) {
      return <div className='alert alert-success'> Category Updated Successfully.</div>
    }
  }

  return (
    <>

      <h3>Edit Category </h3>
      <form className='m-3 p-5 shadow-lg'>

        <Link to={'/admindashboard/category'}> Back</Link>
        <br />

        {showError()}
        {showSuccess()}

        <label htmlFor="category">Category Name</label>
        <input type="text" id='category' className='form-control mb-2 ' onChange={e => setCategory(e.target.value)} value={category} /*D5*/ />
        {/* category ma j change garya xa thyo set hune vhyko =E.target.value ma  */}
        <button className='btn btn-warning w-100' onClick={handleSubmit}>Edit  Category</button>
      </form>

    </>
  )

}

export default UpdateCategory