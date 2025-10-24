import React from 'react'
import { Outlet } from 'react-router-dom'
import { TEXT_CONSTANT } from '../../constant/textConstant'

const Navbar = () => {
  return (
    <>
    <div className='container-fluid bg-dark text-light p-3'>
        {TEXT_CONSTANT.heading}
        <span className='mx-1'><i className='fa fa-mobile text-warning'></i></span>
      
    </div>
    <Outlet/>
    </>
  )
}

export default Navbar
