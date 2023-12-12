import React, { useContext } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { URL } from '../url'
import { UserContext } from '../context/UserContext'


function Login() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const {setUser} = useContext(UserContext)
    const handleLogin = async (e) => {
        try {
            const res = await axios.post(URL + '/api/auth/login', { email, password },{withCredentials:true})
            setUser(res.data)
            navigate('/')
            setEmail(res.data.email)
            setUsername(res.data.username)
            setPassword(res.data.password)
            setError(false)
            console.log('Login Success');
        } catch (error) {
            setError(true)
            console.log(error);
        }
    }

    return (
        <>
            <div className='flex justify-between items-center px-6 md:px-[200px] py-4'>
                <h1 className=' text-lg md:text-xl font-extrabold'><Link to='/'>Blog App</Link></h1>
                <h3 className=' cursor-pointer'><Link to='/register'>Register</Link></h3>
            </div>
            <div className='w-full flex justify-center items-center h-[70vh]'>
                <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
                    <h1 className='text-xl font-bold text-left'>Log In Your Account</h1>
                    <input onChange={e => (setEmail(e.target.value))} className='w-full px-4 py-2 border-2 border-black outline-0' type="email" placeholder='Enter The Email' />
                    <input onChange={e => (setPassword(e.target.value))} className='w-full px-4 py-2 border-2 border-black outline-0' type="password" placeholder='Enter Your Password' />
                    <button onClick={handleLogin} className='w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black'>Log in</button>
                    <div className='flex justify-center items-center space-x-4'>
                        <p>New Here ?</p>
                        <p className='text-gray-500 hover:text-black'><Link to="/register">Register</Link></p>
                        {error && <h3 className='text-red-500'>Something Went Wrong</h3>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login