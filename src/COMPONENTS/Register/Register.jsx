import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../porvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const {
    createUser,
    setUser,
    updateUserProfile,
    signInWithGoogle,
    errorMessage,
    setErrorMessage,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
  

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        updateUserProfile({ displayName: name, photoURL: photo });
        if (result.user) {
          toast.success("User added Successfuly");
          return;
        }
      })
      .then(() => {
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });

    if (errorMessage) {
      toast.warning("auth/email-already-in-use");
    }
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
        if (result.user) {
          toast.success("User added Successfuly");
          return;
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center container px-2 md:px-0 mb-10 md:mb-20 mt-10 md:mt-20 mx-auto">
      <div className="rounded-2xl backdrop-blur-md bg-white/10 border border-white/30 w-full shadow-lg md:w-1/2">
        <form onSubmit={handleRegister} className="card-body space-y-2">
          <h3 className="text-xl font-bold text-center f-oswald text-white">
            Register With
          </h3>
          <button
            onClick={handleGoogleSignIn}
            className="btn text-blue-500 bg-white border-0"
          >
            <FcGoogle></FcGoogle> Google
          </button>
          <div className="text-center text-white font-bold">Or</div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Photo-URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Your photo url"
              className="w-full input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="w-full input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Your password"
              className="w-full input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full bg-[#E4D804] border-0 text-black hover:bg-[#669AB2]">
              Register
            </button>
          </div>
          <p className="font-semibold font-inter text-white">
            Already have an account? please
            <Link className="text-red-400 ml-1 font-bold" to="/login">
              Login
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
