/* eslint-disable react/prop-types */
import {IF} from '../url'

const ProfilePosts = ({p}) => {
  // console.log(p)
  return (
    <div className=" md:w-full  md:flex  md:mt-8  md:space-x-4">
    {/* left */}
    <div className=" md:w-[35%]  md:h-[200px]  md:flex justify-center items-center">
    <img src={IF+p.photo} alt="" className="h-full w-full object-cover"/>
    </div>
    {/* right */}
    <div className=" md:flex  md:flex-col  md:w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
      {p.title}
      </h1>
      <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
       <p>@{p.username}</p>
       <div className="flex space-x-2">
       <p>{new Date(p.updatedAt).toString().slice(0,15)}</p>
       <p>{new Date(p.updatedAt).toString().slice(16,24)}</p>
       </div>
      </div>
      <p className="text-sm md:text-lg">{p.desc.slice(0,200)+" ...Read more"}</p>
    </div>

    </div>
  )
}

export default ProfilePosts