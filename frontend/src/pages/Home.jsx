import React, { useContext, useEffect } from 'react'
import HomePosts from '../components/HomePosts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import { URL } from '../url'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import { UserContext } from '../context/UserContext'



function Home() {

  const [posts, setPosts] = React.useState([])
  const { search } = useLocation()
  const [noResult, setNoResult] = React.useState(false)
  const [loader, setLoader] = React.useState(false)
  const { user } = useContext(UserContext)

  const fetchPosts = async () => {
    try {
      setLoader(true)
      const res = await axios.get(URL + '/api/posts/' + search)
      setPosts(res.data)
      if (res.data.length === 0) {
        setNoResult(true)
      }
      else {
        setNoResult(false)
      }
      setLoader(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [search])
  return (
    <>
      <Navbar />
      <div className=' md:px-8  md:min-h-[80vh] min-h-[50vh]'>
        {loader ? <div className='flex h-[40vh] justify-center text-center items-center '><Loader /></div> : !noResult ?
          posts.map((post) => {
            return <>
              <Link to={user ? `/posts/post/${post._id}` : '/login'}>
                <HomePosts key={post._id} post={post} />
              </Link>
            </>
          }) : <h1 className='text-2xl text-center'>No Result Found</h1>}


        <Footer />
      </div>
    </>

  )
}

export default Home