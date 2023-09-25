import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { verifyEmail } from '../../API/authAPI'

const EmailConfirmation = () => {
  // to get token from url
  // params use for somethong teken from url
    const {token} = useParams()
    // token aauxa backend bata teslai kasto aauxa error or successss herna lai
    const [error,setError]=useState('')
    const[success,setSuccess ]= useState('')
    
    useEffect(()=>{ 
        verifyEmail(token )
        // backend bata Data aauxa thyo kasto xa error or message
        .then(data => {
          if (data.error) {
            setError(data.error)
            setSuccess('')
          }
          else {
            setSuccess(data.message)
            setError('') 
          }
        })
    },[])
  
    const showError = () => {
      if (error) {
        return <div className='alert alert-danger'>{error}</div>
      }
    }
    const showSuccess = () => {
      if (success) {
        return <div className='alert alert-success'> User Register Successfukky.</div>
      }
    }
  
   
  return (
    <>
    <div>
        {showError()}
        {showSuccess()}
    </div>
    </>
  )

}
export default EmailConfirmation