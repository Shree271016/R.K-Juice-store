import React from 'react'
import { useParams } from 'react-router-dom'

const Welcome = () => {
    // let params =useParams()
    // let person = params.name
    let {name}=useParams()
  return (
    <div>Welcome ,{name}</div>
  )
}

export default Welcome