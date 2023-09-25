import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import Register from './Register'
import { isAuthenticated } from '../API/authAPI'

const Header = () => {
  let { user } = isAuthenticated()

  return (
    <>

      <div className="container-fluid  " >
        <div className="row bg-success  "  >
          <div className="col-md-5 text-center py-3 " style={{ height: "100px" }}>
            <li className="navbar-brand fs-1 fw-bold text-warning text-center list-unstyled" style={{ lineHeight: "10px" }} to="#">  RK Organic Fruits  </li>

            <li className="navbar-brand fs-2 fw-bold text-warning text-center list-unstyled " to="#"> <i class="bi bi-shop text-white" ></i> & Juice Center</li>
          </div>
          <div className="col-md-4 py-4 " >
            <form className="d-flex py-1 px-5" style={{ height: "50px" }} >
              <input className="form-control me-2 fs-3" type="search" placeholder="Search here" aria-label="Search" />
              <button className="btn btn-success text-white fs-3 " type="submit">   Search</button>
            </form>
          </div>
          <div className="col-md-3 d-flex justify-content-evenly fs-1 py-4 " style={{ height: "80px" }}>
            {!user &&
              <>
                <Link to='#' >
                  <i className='bi bi-box-arrow-in-left text-warning my_icons' data-bs-toggle="modal" data-bs-target="#LoginModal"></i>
                </Link>
                <Link to='#'>
                  <i className='bi bi-person-plus text-warning my_icons' data-bs-toggle="modal" data-bs-target="#RegisterModal"></i>
                </Link>
              </>}
              {
                user && user.role ===0  &&
                <Link to ='/admindashboard'>
                  <i className='bi bi-speedometer text-warning my_icons'></i>
                </Link>
              }
              {
                user && user.role ===1  &&
                <Link to ='/profile'>
                  <i className='bi bi-person-circle text-warning my_icons'></i>
                </Link>
              }
            <Link to='/Cart'>
              <i className='bi bi-cart text-warning my_icons'></i>
            </Link>


            {user &&

              <i className='bi bi-box-arrow-right text-warning my_icons' role='button' data-bs-toggle="modal" data-bs-target="#RegisterModal"></i>

            }
          </div>
        </div>

      </div>


      <nav className="navbar navbar-expand-lg navbar-light bg-light fw-bold">
        <div className="container-fluid">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb- mb-lg-0 d-flex align-items-center">
              <li className="nav-item" >
                <Link className="nav-link active text-danger fs-1 " aria-current="page" to="/" style={{ paddingBottom: '20px' }} >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-3" aria-current="page" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-3" aria-current="page" to="/Products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-3" aria-current="page" to="/contact">Contacts</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-3" aria-current="page" to="/blogs">Blogs</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link fs-3" to="/Events">Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-3" to="/about">About</Link>
              </li>
              <li className="nav-item dropdown fs-3">
                <Link className="nav-link dropdown-toggle" to="/bestdeals" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Best Deals
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>

            </ul>

          </div>
        </div>
      </nav>
      <div className="modal fade" id="LoginModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">


            <div className="modal-body">
              <LoginForm />
              <div className="text-center">
                Do not have and any account ? <span className='text-decoration-underline text-primary' data-bs-toggle="modal" data-bs-target="#RegisterModal" role='button'>Register </span>
              </div>

            </div>
          </div>
        </div>

      </div>
      <div className="modal fade" id="RegisterModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">


            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
              <Register />
              <div className="text-center">
                Already have and any account ? <span className='text-decoration-underline text-primary' data-bs-toggle="modal" data-bs-target="#LoginModal" role='button'>Login </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Header