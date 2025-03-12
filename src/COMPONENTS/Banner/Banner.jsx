import { IoMdPlay } from "react-icons/io";

const Banner = () => {
  return (
    <div className="">
      <div className="carousel w-full">
        {/* Slider 1 */}
        <div
          id="slide1"
          className="slider carousel-item relative w-full bg-[url(https://joynul2024.sirv.com/movie%20portal%20resource/banner/banner-3.jpg)] bg-no-repeat bg-center bg-cover object-cover"
        >
          <div className="text-white text-center  py-[50px] hero-overlay lg:py-[150px]">
            <h2 className="text-2xl lg:text-5xl font-bold mb-6">
              Unlimited Movie, TVs <span className="text-[#E4D804]">Shows</span>
              , <br /> & More.
            </h2>
            <p className="text-base font-inter">
              Stream the latest blockbusters and timeless classics, Enjoy
              exclusive content anytime, anywhere, <br />
              Experience high-quality streaming without limits, Your ultimate
              movie destination awaits!
            </p>
            <button className="btn flex mx-auto items-center bg-[#E4D804] mt-6 hover:border-[#E4D804] hover:text-white font-semibold hover:bg-black">
              <IoMdPlay></IoMdPlay> Watch Now
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* Slider 2 */}
        <div
          id="slide2"
          className="slider carousel-item relative w-full bg-[url(https://joynul2024.sirv.com/movie%20portal%20resource/banner/banner-2.jpg)] bg-no-repeat bg-center bg-cover object-cover"
        >
          <div className="text-white text-center lg:max-w-[50%] mx-auto py-[50px] lg:py-[150px]"></div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* Slider 3  */}
        <div
          id="slide3"
          className="slider carousel-item relative w-full bg-[url(https://joynul2024.sirv.com/movie%20portal%20resource/banner/movie-banner.jpg)] bg-no-repeat bg-center bg-cover object-cover"
        >
          <div className="text-white text-center lg:max-w-[50%] mx-auto py-[50px] lg:py-[150px]"></div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
