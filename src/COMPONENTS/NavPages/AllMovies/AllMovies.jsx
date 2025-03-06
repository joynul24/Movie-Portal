import { useLoaderData } from "react-router-dom";
import AllMovie from "../../AllMovie/AllMovie";

const AllMovies = () => {
  const allMovies = useLoaderData();

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-white f-oswald md:text-3xl lg:text-4xl font-bold text-center">
        All Movies Here
      </h1>
      <p className=" px-5 md:px-0 md:w-120 text-center text-[#8F8F8F] mx-auto mt-4 f-lato">
        Discover the most thrilling and captivating movies of all time. Stay
        tuned for the latest must-watch films, handpicked just for you!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 mt-10 px-2 md:px-0">
        {allMovies.map((movie) => (
          <AllMovie key={movie._id} movie={movie}></AllMovie>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
