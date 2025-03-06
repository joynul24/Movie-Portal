import { Link, NavLink } from "react-router-dom";
import {} from "./Navber.css";

const Navber = () => {

    const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allMovies'>All Movies</NavLink></li>
    <li><NavLink to='/contactUs'>Contact Us</NavLink></li>
    <li><NavLink to='/addMovies'>Add Movies</NavLink></li>
    <li><NavLink to='/myFavorite'>My Favorite</NavLink></li>
    </>

  return (
    <div className="sticky z-50 top-0  bg-[#1F1F1F]">
      <div className="navbar py-4 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown text-white">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black f-lato"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-8 md:w-12" src="https://joynul2024.sirv.com/movie%20portal%20resource/logo.png" alt="" />
          <Link to='/'>
          <h3 className="md:text-xl md:font-semibold f-oswald text-[#E4D804] pt-2">Movie Portal</h3>
          </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 f-lato text-white font-semibold">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/login'><button className="btn bg-[#000000] text-white hover:bg-[#E4D804] hover:text-black border-[#E4D804] f-lato">Sign In</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
