import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AddMovies = () => {
  const hangleAddMovie = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const year = form.year.value;
    const rating = form.rating.value;
    const poster = form.poster.value;
    const summary = form.summary.value;

    if (
      title === "" ||
      genre === "" ||
      duration === "" ||
      year === "" ||
      rating === "" ||
      poster === "" ||
      summary === ""
    ) {
      toast.error("Please fill in the full form");
      return;
    }

    const newMovie = {
      title,
      genre,
      duration,
      year,
      rating,
      poster,
      summary,
    };
    fetch("https://a10-movie-portal-server.vercel.app/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Movie added Successfuly!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="text-white container mx-auto mt-5 md:mt-10 px-1 md:px-0">
      <h1 className="md:text-3xl lg:text-4xl font-bold f-oswald text-center my-8">
        Add Movies
      </h1>
      <form
        onSubmit={hangleAddMovie}
        className=" bg-base-100 shrink-0 shadow-2xl text-black p-8 rounded-xl"
      >
        <div className="md:flex gap-6 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text f-oswald">Movie Title</span>
            </label>
            <input
              name="title"
              type="text"
              placeholder="movie title"
              className="input input-bordered w-full"
            />
          </div>
          {/* Genre field */}
          <div className="flex flex-col form-control md:w-1/2">
            <label className="label">
              <span className="label-text f-oswald">Genre</span>
            </label>
            <select name="genre" defaultValue="genre" className="select w-full">
              <option disabled={true}>Choose Genre</option>
              <option>Action</option>
              <option>Horror</option>
              <option>Comedy</option>
              <option>Romance</option>
            </select>
          </div>
        </div>
        <div className="md:flex gap-6 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text f-oswald">Duration</span>
            </label>
            <input
              name="duration"
              type="text"
              placeholder="duration "
              className="input input-bordered w-full"
            />
          </div>
          {/* relige year */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text f-oswald">Release Year </span>
            </label>
            <select
              name="year"
              type="number"
              defaultValue="genre"
              className="select w-full"
            >
              <option disabled={true}>Year</option>
              <option>2003</option>
              <option>2000</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
            </select>
          </div>
        </div>
        {/* Rating */}
        <div className="md:flex gap-6 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text f-oswald">Rating</span>
            </label>
            <input
              name="rating"
              type="number"
              placeholder="rating"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text f-oswald">Movie Poster</span>
            </label>
            <input
              name="poster"
              type="text"
              placeholder="poster url"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex gap-6 mb-6">
          <div className="flex flex-col form-control w-full">
            <label className="label">
              <span className="label-text f-oswald">Summary</span>
            </label>
            <textarea
              type="text"
              name="summary"
              className="w-full textarea"
              placeholder="Summary"
            ></textarea>
          </div>
        </div>
        <button className="btn bg-black border-[#F4D804] hover:bg-[#F4D804] hover:text-black btn-primary w-full">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovies;
