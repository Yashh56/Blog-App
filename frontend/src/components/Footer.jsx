const Footer = () => {
  return (
    <>
      <div className=" w-full mt-8  md:w-full h-[20vh]  bg-black px-8 md:px-[300px]  md:flex md:flex-row  flex justify-between  space-y-6 md:space-y-0  md:items-start md:justify-between text-sm md:text-md py-8 ">
        <div className="flex flex-col text-white">
          <p>Featured Blogs</p>
          <p>Most viewed</p>
          <p>Readers Choice</p>
        </div>

        <div className="flex-wrap  text-white ">
          <p>Forum</p>
          <p>Support</p>
          <p>Recent Posts</p>
        </div>

        <div className="flex flex-col text-white ">
          <p>Privacy Policy</p>
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>Terms of Service</p>
        </div>
      </div>
      <p className=" md:w-full py-2 pb-6 text-center text-white bg-black text-sm">All rights reserved @Blog Market 2023</p>
    </>

  )
}

export default Footer