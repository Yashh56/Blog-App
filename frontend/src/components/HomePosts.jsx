/* eslint-disable react/prop-types */

const HomePosts = ({ post }) => {
  return (
    <div className=" md:w-full  md:flex  md:space-x-4  md:mt-8 md:px-[200px] px-8">
      {/* left */}
      <div className=" md:w-[35%]  md:h-[200px]  md:flex  md:justify-center  md:items-center">
        <img
          src={post.photo}
          className="md:h-full  md:w-full  md:object-cover"
          alt=""
        />
      </div>
      {/* right */}
      <div className=" md:flex  md:flex-col  md:w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          {post.title}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@{post.username}</p>
          <div className="flex space-x-2 text-sm">
            <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          {post.desc.slice(0, 200) + "...Read More"}
        </p>
      </div>
    </div>
  );
};
export default HomePosts;
