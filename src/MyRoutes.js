import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Second from './Second'
import Home from './components/Pages/Home'
import Cart from './components/Pages/Cart'
import Contact from './components/Pages/Contact'
import Blogs from './components/Pages/Blogs'
import Events from './components/Pages/Events'
import About from './components/Pages/About'
import Services from './components/Pages/services'
import Products from './components/Pages/Products'
import EmailConfirmation from './components/Pages/EmailConfirmation'
// import AdminSidebar from './components/Pages/admin/AdminSidebar'
// import AdminDashboard from './components/Pages/admin/AdminDashboardLayout'
import AdminCategory from './components/Pages/admin/AdminCategory'
// import AdminDashboardLayout from './components/Pages/admin/AdminDashboardLayout'
import DashboardMain from './components/Pages/admin/DashboardMain'
import AdminDashboardLayout from './components/Pages/admin/AdminDashboardLayout'
import AddCategory from './components/Pages/admin/AddCategory'
import UpdateCategory from './components/Pages/admin/UpdateCategory'
import Counter from './components/Pages/admin/hooks/counter'
import InfoPage from './components/Pages/admin/hooks/InfoPage'
import Welcome from './components/Pages/admin/hooks/Welcome'
import FetchData from './components/Pages/admin/hooks/FetchData'


const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path='Second' element={< Second />}></Route>
                    <Route path='Cart' element={<Cart />}> </Route>
                    <Route path='contact' element={<Contact />}></Route>
                    <Route path='services' element={<Services />}></Route>
                    <Route path='Blogs' element={<Blogs />}></Route>
                    <Route path='Events' element={<Events />}></Route>
                    <Route path='About' element={<About />}></Route>
                    <Route path='Products' element={<Products />}></Route>
                    <Route path='verifyemail/:token' element={<EmailConfirmation />}></Route>
                    <Route path='/admindashboard' element={<AdminDashboardLayout />}>
                        <Route index element={<DashboardMain />}></Route>
                        <Route path='category' element={<AdminCategory />}></Route>
                        <Route path='addcategory' element={<AddCategory />}></Route>
                    <Route path='category/edit/:id' element={<UpdateCategory/>}></Route>
                    </Route>
                  
                    <Route path='counter' element={<Counter/>}></Route>
                    <Route path='info' element={<InfoPage/>}></Route>
                    <Route path='welcome/:name' element={<Welcome/>}></Route>
                    <Route path='data' element={<FetchData/>}></Route>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}



export default MyRoutes