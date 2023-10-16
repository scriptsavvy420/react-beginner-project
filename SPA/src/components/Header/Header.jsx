import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <>
      <div
        className="navbar max-w-6xl bg-slate-50 shadow-slate-600 shadow-md rounded-sm p-4 w-full flex justify-between items-center">
        <div className="leftpart">

          <Link to="/">
            <img
              src="../src\assets\R-removebg-preview.png"
              className='h-14' />
          </Link>

        </div>
        <Link to="#">
          <div className="rightpart flex items-center gap-14">
            <ul className='flex items-center gap-4 text-gray-600'>
              <li className='hover:text-orange-500'>
                <NavLink to="/" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-gray-600"}`}>Home</NavLink>
              </li>
              <li className='hover:text-orange-500'>
                <NavLink to="/about" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-gray-600"}`}>About</NavLink>
              </li>
              <li className='hover:text-orange-500'>
                <NavLink to="/contact" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-gray-600"}`}>Contact</NavLink>
              </li>
              <li className='hover:text-orange-500'>
                <NavLink to="/github" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-gray-600"}`}>Github</NavLink>
              </li>
            </ul>
            <div className="loginout flex justify-between items-center gap-4 text-gray-600">
              <div className="getstarted bg-orange-500 text-yellow-50 p-3 rounded-xl">Get Started</div>
              <div className="login hover:text-orange-500">login</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}