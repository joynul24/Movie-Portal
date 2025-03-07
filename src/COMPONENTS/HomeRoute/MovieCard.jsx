/* eslint-disable react/prop-types */
import { FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const {_id, title, genre, duration, year, poster } = movie;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm transition duration-500 hover:scale-105 overflow-hidden hover:border-[#E4D804] hover:border-2">
        <figure className="h-[400px]">
          <img className="h-full w-full" src={poster} alt="movie images" />
        </figure>
        <div className="f-lato py-4 px-4 text-black">
          {/* 1 row */}
          <div className="flex justify-between items-center">
            <h2 className="md:text-2xl font-bold f-oswald">{title}</h2>
            <p className="font-bold text-gray-600">{year}</p>
          </div>
          {/* 2 row */}
          <div className="flex justify-between items-center mt-2">
            <h3 className="text-xl font-bold text-gray-600">{genre}</h3>
            <p className="font-semibold text-gray-600">{duration} Min</p>
          </div>
          {/* 3 row */}
          <div className="flex justify-between items-center mt-2">
            {/* rating */}
            <span className="flex"><FaStar className="text-orange-300"></FaStar><FaStar className="text-orange-300"></FaStar><FaStar className="text-orange-300"></FaStar><FaStar className="text-orange-300"></FaStar></span>
            <button className="btn rounded-full text-xl hover:bg-[#E4D804] hover:border-black">
              <FaRegHeart></FaRegHeart>
            </button>
          </div>
          <Link to="/allMovies">
            <p className="underline font-bold text-[#e2435d] hover:text-black mt-2">
              See All Movies
            </p>
          </Link>
          <div className="mt-10">
            <Link to={`/movieDetails/${_id}`}>
              <button className="btn w-full bg-[#E4D804] hover:bg-black hover:text-white hover:border-[#E4D804]">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
