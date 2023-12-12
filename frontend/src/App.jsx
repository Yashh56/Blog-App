import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import {Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import PostDetails from './pages/PostDetails'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Profile from './pages/Profile'
import MyBlogs from './components/MyBlogs'
import { UserContextProvider } from './context/UserContext'
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/posts/post/:id' element={<PostDetails/>}/>
        <Route path='/write' element={<CreatePost/>}/>
        <Route path='/edit/:id' element={<EditPost/>}/>
        <Route path='/edit/:id' element={<EditPost/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
        <Route path='*' element={<h1>404 Not Found</h1>}/>
        <Route path='/myblogs/:id'element={<MyBlogs/>}/>
      </Routes>
      </UserContextProvider>
  )
}

export default App