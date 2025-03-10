import { BiSolidVideoRecording } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";
import { LuTv } from "react-icons/lu";

const Service = () => {
  return (
    <div className="bg-[#201F25] py-4 mb-20">
      <div className="text-white container mx-auto mb-10  mt-10 md:mt-30 md:mb-20 px-3 md:px-0">
        <h1 className=" font-bold  md:text-2xl lg:text-4xl f-oswald text-center text-white">
          Unlimited Movies & TV Shows
        </h1>
        <p className=" px-5 md:px-0 md:w-120 text-center text-[#8F8F8F] mx-auto mt-4 f-lato">
          Watch your favorite movies and series anytime, anywhere. Enjoy the
          latest and most popular content with just one click. Seamless HD
          streaming and offline viewing at your fingertips!
        </p>

        <div className="flex flex-col md:flex-row gap-8 mt-10 md:mt-15">
          <div>
            <img
              className="h-full w-full md:w-auto"
              src="https://joynul2024.sirv.com/movie%20portal%20resource/services_img.jpg"
              alt=""
            />
          </div>
          <div className="text-white flex flex-col space-y-5">
            <h2 className=" md:text-2xl lg:text-4xl f-oswald font-bold">
              Download Your Shows Watch Offline.
            </h2>
            <p className="text-[#8F8F8F] f-lato mt-7">
              Discover a world of entertainment with thousands of movies and
              shows. Stream in high <br /> quality with no ads and no
              interruptions. Your ultimate movie experience starts here!
            </p>
            <div className="flex gap-5 items-center">
              <div className="text-3xl border-2 border-[#E4D804] border-dotted p-2 rounded-full">
                <div className=" hover:text-black hover:bg-[#E4D804] rounded-full p-4">
                  {" "}
                  <LuTv />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold f-oswald mt-2">
                  Enjoy on Your TV.
                </h4>
                <p className="text-[#8F8F8F] f-lato mt-2">
                  Here are the TV viewing options and you <br /> can select your
                  choice and watch on TV very well
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="text-3xl border-2 border-[#E4D804] border-dotted p-2 rounded-full">
                <div className=" hover:text-black hover:bg-[#E4D804] rounded-full p-4">
                  {" "}
                  <BiSolidVideoRecording />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold f-oswald mt-2">
                  Watch Everywhere.
                </h4>
                <p className="text-[#8F8F8F] f-lato mt-2">
                  Here are the watch viewing options and you <br /> can select
                  your choice and watch on watch very well
                </p>
              </div>
            </div>
            <button className="btn bg-[#E4D804] hover:bg-transparent hover:text-white mt-5">
              Download <FaDownload />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
