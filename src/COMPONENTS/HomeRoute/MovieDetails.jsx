import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {

    const movies = useLoaderData();
    const {title, genre, duration, year, rating, poster, summary} = movies;

    return (
        <div className='container mx-auto px-2 mb-10 md:mb-0'>
           <div className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl mt-10 md:mt-20">
            {/* poster */}
              <div>
                 <img className="rounded-2xl w-full h-full md:w-auto" src={poster} alt="movie poster" />
              </div>
              {/* conent */}
              <div className="py-4 px-5 md:px-0 flex flex-col space-y-3">
                {/* 1 */}
                 <p className="text-2xl "><span className="font-bold">Title:</span> <span className="font-medium f-oswald text-gray-600">{title}</span></p>
                 {/* 2 */}
                 <p className="text-2xl "><span className="font-bold">Genre:</span> <span className="font-medium f-oswald text-gray-600">{genre}</span></p>
                 {/* 3 */}
                 <p className="text-2xl "><span className="font-bold">Duration:</span> <span className="font-medium f-oswald text-gray-600">{duration}</span></p>
                 {/* 4 */}
                 <p className="text-2xl "><span className="font-bold">Release Year:</span> <span className="font-medium f-oswald text-gray-600">{year}</span></p>
                 {/* 5 */}
                 <p className="text-2xl "><span className="font-bold">Rating:</span> <span className="font-medium f-oswald text-gray-600">{rating}</span></p>
                 {/* 6 */}
                 <p className="text-2xl  max-w-4xl "><span className="font-bold f-oswald">Summary Year:</span> <span className="font-medium f-lato text-gray-600">{summary}</span></p>
              </div>
           </div>
        </div>
    );
};

export default MovieDetails;