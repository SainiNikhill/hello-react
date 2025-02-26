import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
 
  return (
    <div className='py-7 px-10  text-white
    flex items-center justify-between bg-emerald-600'>
      <h2 className='text-2xl' >Nikhil</h2>
      <div className='flex gap-10'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
        
      </div>
    </div>
  )
}

export default Header