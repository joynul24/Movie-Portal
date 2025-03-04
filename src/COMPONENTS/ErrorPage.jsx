import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-[url(https://joynul2024.sirv.com/coffee-images/404/404.gif)] min-h-screen bg-no-repeat bg-cover">
       <div className="flex container mx-auto md:mt-20 mt-5">
       <Link
         to='/' className="bg-[#59C6D2] text-white py-1 px-4 rounded-lg ">Back to Home</Link>
       </div>
    </div>
    );
};

export default ErrorPage;