import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import { URL } from '../url'

function Menu() {
  const { user } = useContext(UserContext)
  const Navigate = useNavigate()
  const { setUser } = useContext(UserContext)
  const handleLogOut = async () => {
    try {
      const res = await axios.get(URL + "/api/auth/logout", { withCredentials: true })
      setUser(null)
      Navigate("/")
      
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='bg-black w-[200px] flex flex-col items-start absolute top-12 right-6 rounded-md p-4 space-y-4 z-10'>
      {!user && <h3 className='text-white text-md hover:text-gray-500 cursor-pointer'><Link to='/login'>Login</Link></h3>}
      {!user && <h3 className='text-white text-md hover:text-gray-500 cursor-pointer'><Link to="/register">Register</Link></h3>}
      {user && <h3 className='text-white text-md hover:text-gray-500 cursor-pointer'> <Link to={'/profile/'+user._id}>Profile</Link></h3>}
      {user && <h3 className='text-white text-md hover:text-gray-500 cursor-pointer'> <Link to='/write'>Write</Link></h3>}
      {user && <h3 className='text-white text-md hover:text-gray-500 cursor-pointer'><Link to={'/myblogs/'+user._id}>My blogs</Link></h3>}
      {user && <h3 onClick={handleLogOut} className='text-white text-md hover:text-gray-500 cursor-pointer'>LogOut</h3>}
    </div>
  )
}

export default Menu