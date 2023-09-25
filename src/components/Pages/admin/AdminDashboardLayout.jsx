import React from 'react'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'

const AdminDashboardLayout = () => {
  return (
    <>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 m-4">
            <AdminSidebar />
          </div>

          <div className="col-md-6 p-5">
            <Outlet/>
          </div>
        </div>
      </div>

    </>)
}
export default AdminDashboardLayout

