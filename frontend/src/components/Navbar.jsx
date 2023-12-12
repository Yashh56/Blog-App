import React, { useContext, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import Menu from './Menu';
import { UserContext } from '../context/UserContext';

function Navbar() {
  const [prompt, setPrompt] = useState('')
  const [menu, setMenu] = useState(false)
  const navigate = useNavigate()
  const showMenu = () => setMenu(!menu)
  const { user } = useContext(UserContext)
  const path = useLocation().pathname
  return (
    <div className='flex justify-between items-center px-6 md:px-[200px] py-4'>
      <h1 className=' text-lg md:text-xl font-extrabold'><Link to='/'>Blog App</Link></h1>
      {path === '/' && <div className='flex justify-center items-center space-x-0'>
        <p onClick={() => navigate(prompt ? "?search=" + prompt : navigate('/'))} className=' cursor-pointer'><IoSearch /></p>
        <input type='text' placeholder='Search' className='outline-none px-3' onChange={e => setPrompt(e.target.value)} />
      </div>}
      <div className='md:flex items-center justify-center space-x-2 md:space-x-4 max-md:hidden'>
        {user ? <h3><Link to='/write'>Write</Link></h3> : <h3><Link to='/login'>Login</Link></h3>}
        {user ? <div onClick={showMenu} className=' cursor-pointer'>
          <p className=' cursor-pointer relative'><FaBarsStaggered /></p>
          {menu && <Menu />}
        </div> : <h3> <Link to='/register'>Register</Link></h3>}
      </div>
      <div className='md:hidden text-lg cursor-pointer' onClick={showMenu}>
        <p className=' cursor-pointer relative'><FaBarsStaggered /></p>
        {menu && <Menu />}
      </div>
    </div>
  )
}

export default Navbar