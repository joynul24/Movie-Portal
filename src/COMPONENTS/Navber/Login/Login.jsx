import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../porvider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {

  const navigate = useNavigate()
  const {signInUser,signInWithGoogle} = useContext(AuthContext);

  const handleLogin = e => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
    .then(result => {
      navigate('/')
      if(result.user) {
        toast.success("User added Successfuly");
              return;
      }
      e.target.reset();
    })
    .catch(error => {
      console.log('ERROR', error.message);
    })
}

const handleGoogleSignIn = () => {
  signInWithGoogle()
  .then((result) => {
    navigate('/')
    if(result.user) {
      toast.success("User added Successfuly");
            return;
    }
  })
  .catch((error) => {
    console.log('ERROR' , error.message);
  })
}

  return (
    <div className="flex justify-center items-center container px-2 md:px-0 mb-10 md:mb-20 mt-10 md:mt-20 mx-auto">
      <div className="rounded-2xl backdrop-blur-md bg-white/10 border border-white/30 w-full shadow-lg md:w-1/2">
        <form onSubmit={handleLogin} className="card-body space-y-2">
          <h3 className="text-xl font-bold text-center f-oswald text-white">
            Login With
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
              Login
            </button>
          </div>
          <p className="font-semibold font-inter text-white">New to this website? please? <Link className="text-red-400" to='/register'>Register</Link>.</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
