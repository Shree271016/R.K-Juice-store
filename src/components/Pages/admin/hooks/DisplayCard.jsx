import React from 'react'

// const DisplayCard = (props) => {
const DisplayCard = ({name , address,phone,email}) => {
    // name adderss phone email 
    // props= propities

    // Destructuring of Object
 
//    const{name ,address,phone,email} = props
  return (
    <div className='card p-5'>  
    <h4>Name : {name}</h4> 
    <h4>Address : {address}</h4>
    <h4>Phone : {phone}</h4>
    <h4>Email : {email}</h4>
    </div>
  )
}

export default DisplayCard