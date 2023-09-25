import React, { useEffect, useState } from 'react'
import { deleteCategory, getAllCategory } from '../../../API/categoryAPI'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { isAuthenticated } from '../../../API/authAPI'
// import { green } from '@mui/material/colors'
// import { Token } from '@mui/icons-material'

const AdminCategory = () => {
  // to store all category 
  let [categories, setCategories] = useState([])
  let [error,setError] = useState('')
  let [success, setSuccess]= useState(false)

  const {token}=isAuthenticated()
  // to load  all categories 
  useEffect(() => {
    getAllCategory()
      // data ma error aayo vhaen 
      .then(data => {
        if (data.error) {
          // consle garera pathaune
          console.log(data.error)
        }
        else {
          // error aaenna vhane data aauxa teslai set garnu paryo
          setCategories(data)
        }
      })
  }, [success])
  const handleDelete = id => e => { /* id pass garera event lene*/
    e.preventDefault()
    // successs true thyo feri true vhyo ani error aayo
    //  set success firstly false hinuparyo and seterror khali hunuparyo
    /*page ma khai change vhyo vhane reload garxa*/
    setSuccess(false)
    setError('')
    
    // to disply sweet alert 
    Swal.fire({
      // titile
      title:"Delete Category",
      text:"Are you sure,you want to delete this category",
      icon:"question",
      showCancelButton:true,
      cancelButtonColor:'#79151D',
      confirmButtonColor:'blue',


    })
    .then(result=>{
      if (result.isConfirmed){
        deleteCategory(id,token)
        .then(data=>{
          if(data.error){
            setError(data.error)
            setSuccess(false)
          }
          else{
            setSuccess(true)
            setError('')
          }
        })
      }
      else{
        return
      }
    })

  }

  const showError= () => {
    if (error){
      Swal.fire('error', error,'error')
    }
  }
  const showSuccess = () =>
  {
    if (success){
      Swal.fire('success',"Category Deleted", 'success')
    }
  }

  return (
    <>
    {showError()}
    {showSuccess()}
      <div className='d-flex justify-content-between mb-2 margin-left-3'>
        <h3>Categories</h3>
        <Link to={'/admindashboard/addcategory'} className='btn btn-success'>Add New Category</Link>
      </div>
      <table className='table table-bordered table-hover text-center '>
        <thead className='table-dark' >
          <tr>
            <td>S.No</td>
            <td>Category Name</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            categories.map((category, i) => {
              return <tr key={i}>
                <td>{i + 1}</td>
                <td> {category.category_name}</td>
                <td>
                  <div className='btn-group'>
                    <Link to={`/admindashboard/category/edit/${category._id}`} className='btn btn-warning'>
                      <i className='bi bi-pencil'></i>
                    </Link>
                    <button className='bttn btn-danger' onClick={handleDelete(category._id)} /* (!1)Delete garne FUNCTION*/>
                      <i className='bi bi-trash'></i>
                    </button>

                  </div>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default AdminCategory