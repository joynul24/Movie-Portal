import { useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";

const FeaturedMovie = () => {

  const movies = useLoaderData()
  return (
    <div className="container mx-auto text-white mt-5 md:mt-10 mb-10">
      <h1 className="f-oswald md:text-3xl lg:text-4xl font-bold text-center">Featured Movies</h1>
      <p className=" px-5 md:px-0 md:w-120 text-center text-[#8F8F8F] mx-auto mt-4 f-lato">
        Discover the most thrilling and captivating movies of all time.
        Stay tuned for the latest must-watch films, handpicked just for you!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-12 px-2 md:px-0">
        {
          movies.map(movie => <MovieCard key={movie._id} movie={movie}></MovieCard>)
        }
      </div>
    </div>
  );
};

export default FeaturedMovie;
