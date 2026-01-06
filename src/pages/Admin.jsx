import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Admin() {
  return (
    <div className="flex min-h-screen">
      
      {/* Sidebar */}
      <div className="w-64 bg-blue-950 text-white p-6 space-y-4">
        <div className="w-30 h-30 rounded-full bg-white text-blue-900 flex ml-10 items-center justify-center text-3xl">
          <i className="fa-solid fa-user"></i>
        </div>
        <h2 className="mt-3 font-bold text-2xl">Swechha Shrestha</h2>
        <p className="text-sm text-gray-300">swechhashrestha@gmail.com</p>

        <NavLink to="" end className=" hover:text-gray-300 flex items-center justify-evenly mr-10">
          <i className="fa-solid fa-house"></i>
          Home
        </NavLink>

        <NavLink to="product" className=" hover:text-gray-300 flex items-center justify-evenly mr-8">
          <i className="fa-solid fa-cart-shopping"></i>
          Product
        </NavLink>

        <NavLink to="files" className=" hover:text-gray-300 flex items-center justify-evenly mr-15">
          <i className="fa-solid fa-folder"></i>
          Files
        </NavLink>

        <NavLink to="messages" className=" hover:text-gray-300 flex items-center justify-evenly mr-7">
          <i className="fa-solid fa-message"></i> 
          Messages
        </NavLink>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </div>

    </div>
  )
}

export default Admin



