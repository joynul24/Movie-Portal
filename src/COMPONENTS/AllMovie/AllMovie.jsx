/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../porvider/AuthProvider";

const AllMovie = ({ movie }) => {
  const { _id, title, genre, duration, year, poster } = movie;
  const allMovies = useLoaderData();
  const [movies, setMovies] = useState(allMovies);
  const {user} = useContext(AuthContext);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete from the database
        fetch(`http://localhost:5000/movies/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("delete is done", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your movie has been deleted.",
                icon: "success",
              });

              const remainingMovie = movies.filter(
                (singleMovie) => singleMovie._id !== id
              );
              setMovies(remainingMovie);
            }
          });
      }
    });
  };

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
            <span className="flex">
              <FaStar className="text-orange-300"></FaStar>
              <FaStar className="text-orange-300"></FaStar>
              <FaStar className="text-orange-300"></FaStar>
              <FaStar className="text-orange-300"></FaStar>
            </span>
            <div className="flex items-center">
              <span className=" hover:bg-gray-300 hover:rounded-full p-2 text-2xl text-red-400 cursor-pointer">
                <button onClick={()=> handleDelete(_id)}><MdDelete /></button>
              </span>
              <button className="btn rounded-full text-xl hover:bg-[#E4D804] hover:border-black">
                <FaRegHeart></FaRegHeart>
              </button>
            </div>
          </div>
          <div className="mt-10">
            <Link to={user ? `/CardDetails/${_id}` : '/login'}>
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

export default AllMovie;
