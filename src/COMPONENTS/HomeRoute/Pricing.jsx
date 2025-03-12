import { TiTick } from "react-icons/ti";

const Pricing = () => {
  return (
    <div className="bg-[#15151F] pt-10">
      <div className="text-white container mx-auto mb-20 px-2 md:px-0">
        <p className="f-lato font-bold md:text-2xl text-center">
          our pricing plans
        </p>
        <h2 className=" md:text-2xl lg:text-4xl font-bold f-oswald text-center mt-2 md:mt-5">
          Our Pricing Strategy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer mt-10 pb-20">
          {/* box-1 */}
          <div className="bg-[#1F1E24] rounded-xl border-[#1F1E24] border-2 hover:border-[#E4D804] px-15 py-10 cursor-pointer transition-colors duration-600">
            <h4 className="text-center f-oswald font-bold">premium</h4>
            <div className="flex justify-center mt-10 mb-10">
              <div className="bg-[#E4D804] text-black p-6 rounded-xl">
                <p className="f-lato font-bold">$7.99</p>
                <p className="f-lato font-bold"> Monthly</p>
              </div>
            </div>
            {/* table */}
            <div className="mb-5">
              {/* row 1 */}
              <div className="flex justify-between border-b-2 border-b-[#8f8F8F] pb-8">
                <p className="f-lato font-bold flex items-center gap-2">
                  <TiTick /> Video quality
                </p>
                <p className="f-lato font-bold text-[#E4D804]">Good</p>
              </div>
            </div>
            <div className="mb-5">
              {/* row 2 */}
              <div className="flex justify-between border-b-2 border-b-[#8f8F8F] pb-8">
                <p className="f-lato font-bold flex items-center gap-2">
                  <TiTick /> Resolution
                </p>
                <p className="f-lato font-bold">480p</p>
              </div>
            </div>
            <div className="mb-5">
              {/* row 3 */}
              <div className="flex justify-between border-b-2 border-b-[#8f8F8F] pb-8">
                <p className="f-lato font-bold flex items-center gap-2">
                  <TiTick /> Screens you can watch
                </p>
                <p className="f-lato font-bold">1</p>
              </div>
            </div>
            <div className="mb-5">
              {/* row 4 */}
              <div className="flex justify-between border-b-2 border-b-[#8f8F8F] pb-8">
                <p className="f-lato font-bold flex items-center gap-2">
                  <TiTick /> Cancel anytime
                </p>
              </div>
              {/* btn */}
              <div className="flex justify-center mt-8">
                <button className="btn bg-transparent text-white border-[#E4D804] hover:bg-[#E4D804] hover:text-black rounded-4xl">Buy Now</button>
              </div>
            </div>
          </div>
          {/* box-2 */}
          <div className="bg-[#1F1E24] rounded-xl border-2 border-[#E4D804] px-15 py-10 cursor-pointer">
            <h4 className="text-center f-oswald font-bold">standard</h4>
            <div className="flex justify-center mt-10">
              <div className="bg-[#E4D804] text-black p-6 rounded-xl mb-10">
                <p className="f-lato font-bold">$9.99</p>
                <p className="f-lato font-bold"> Monthly</p>
              </div>
            </div>
            {/* table */}
            <div className="mb-5">
              {/* row 1 */}
              <div className="flex justify-between border-b-2 border-b-[#8f8F8F] pb-8">
                <p className="f-lato font-bold flex items-center gap-2">
                  <TiTick /> Video quality
                </p>
                <p className="f-lato font-bold text-[#E4D804]">Better</p>
              </div>
            </div>
            <div className="mb-5">
              {/* row 2 */}
              <div className="flex justify-between border-b-2 border-b-[#8f8F8F] pb-8">
                <p className="f-lato font-bold flex items-center gap-2">
                  <TiTick /> Resolution
                </p>
                <p className="f-lato font-bold">1020p</p>
              </div>
            </div>
            <div className="mb-5">
              {/* row 3 */}
              <div className="flex justify-between border-b-2 border-b-[#8f8F8F] pb-8">
                <p className="f-lato font-bold flex items-center gap-2">
                  <TiTick /> Screens you can watch
                </p>
                <p className="f-lato font-bold">2</p>
              </div>
            </div>
            <div className="mb-5">
              {/* row 4 */}
              <div className="flex justify-between border-b-2 border-b-[#8f8F8F] pb-8">
                <p className="f-lato font-bold flex items-center gap-2">
                  <TiTick /> Cancel anytime
                </p>
              </div>
              {/* btn */}
              <div className="flex justify-center mt-8">
                <button className="btn bg-transparent text-white border-[#E4D804] hover:bg-[#E4D804] hover:text-black rounded-4xl">Buy Now</button>
              </div>
            </div>
          </div>
          {/* box-2 */}
          <div className="bg-[#1F1E24] rounded-xl border-[#1F1E24] border-2 hover:border-[#E4D804] px-15 py-10 cursor-pointer transition-colors duration-600">
            <h4 className="text-center f-oswald font-bold">premium</h4>
            <div className="flex justify-center mt-10">
              <div className="bg-[#E4D804] text-black p-6 rounded-xl mb-10">
                <p className="f-lato font-bold">$11.99</p>
                <p className="f-lato font-bold"> Monthly</p>
              </div>
            </div>
            {/* table */}
            <div className="mb-5">
              {/* row 1 */}
              <div className="flex justify-between border-b-2 border-b-[#8f8F8F] pb-8">
                <p className="f-lato font-bold flex items-center gap-2">
                  <TiTick /> Video quality
                </p>
                <p className="f-lato font-bold text-[#E4D804]">4K+HDR</p>
              </div>
            </div>
            <div className="mb-5">
              {/* row 2 */}
              <div className="flex justify-between border-b-2 border-b-[#8f8F8F] pb-8">
                <p className="f-lato font-bold flex items-center gap-2">
                  <TiTick /> Resolution
                </p>
                <p className="f-lato font-bold">1020p</p>
              </div>
            </div>
            <div className="mb-5">
              {/* row 3 */}
              <div className="flex justify-between border-b-2 border-b-[#8f8F8F] pb-8">
                <p className="f-lato font-bold flex items-center gap-2">
                  <TiTick /> Screens you can watch
                </p>
                <p className="f-lato font-bold">4</p>
              </div>
            </div>
            <div className="mb-5">
              {/* row 4 */}
              <div className="flex justify-between border-b-2 border-b-[#8f8F8F] pb-8">
                <p className="f-lato font-bold flex items-center gap-2">
                  <TiTick /> Cancel anytime
                </p>
              </div>
              {/* btn */}
              <div className="flex justify-center mt-8">
                <button className="btn bg-transparent text-white border-[#E4D804] hover:bg-[#E4D804] hover:text-black rounded-4xl">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
