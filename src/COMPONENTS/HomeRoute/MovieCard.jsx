/* eslint-disable react/prop-types */
import { FaRegHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

const MovieCard = ({ movie }) => {
  const { title, genre, duration, year, rating, poster } = movie;
  const numberRating = parseInt(rating);
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
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
              <p>
                <ReactStars
                  count={numberRating}
                  size={24}
                  activeColor="#ffd700"
                />
              </p>
              <button className="btn rounded-full text-xl hover:bg-[#E4D804] hover:border-black"><FaRegHeart></FaRegHeart></button>
          </div>
          <div className="mt-10">
            <button className="btn w-full bg-[#E4D804] hover:bg-black hover:text-white hover:border-[#E4D804]">
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
