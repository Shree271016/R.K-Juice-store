import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../../API/authAPI'

const AdminSidebar = () => {
  const { user } = isAuthenticated()
  return (
    <>

      <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white" style={{ width: "380px",height:"70vh" }}>
        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-white text-decoration-none">
          <span className="fs-1">
            Welcome,{user.username}
          </span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <Link to="/admindashboard/category" className="nav-link link-dark fs-3 text-white" >
              <i className='bi bi-grid me-2'></i>
              Category
            </Link>
          </li>
          <li>
            <Link to="/admindashboard/product" className="nav-link link-dark fs-3 text-white">
              <i className='bi bi-grid me-2'></i>
              Products
            </Link>
          </li>
          <li>
            <Link to="/admindashboard/orders" className="nav-link link-dark fs-3 text-white">
              <i className='bi bi-table me-2'></i>
              Orders
            </Link>
          </li>

          <li>
            <Link to="/admindashboard/users" className="nav-link link-dark fs-3 text-white">
              <i className='bi bi-person circle me-2'></i>
              Users
            </Link>
          </li>
        </ul>
        <hr />
        
          <Link to="#" className="d-flex align-items-center link-dark text-decoration-none e fs-5 text-white" id="dropdownUser2"  >
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
            <strong>
              {user.email}
            </strong>
          </Link>
       
        </div>
      

    </>
  )
}

export default AdminSidebar