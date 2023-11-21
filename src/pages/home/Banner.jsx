import picture1 from "../../assets/banner/Picture.png";
import picture2 from "../../assets/banner/Picture 2.png";
import picture3 from "../../assets/banner/Picture 3.png";

const Banner = () => {
  return (
    <div className="background relative">
      <div className="relative">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="1536"
          height="210"
          viewBox="0 0 1536 210"
          fill="none"
        >
          <path d="M0 210H1536V80.0669V0L0 192.622V210Z" fill="#FAFBFC" />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-[92px] lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl lg:pr-[30px] -mt-8">
              <h2 className="mb-4 lg:text-5xl font-[750] text-black text-4xl sm:leading-none">
                Find <span className="bg-gradient-to-r from-[#0076CE] to-[#9400D3] bg-clip-text text-transparent">Partners</span> (CAs) available online
              </h2>
              <p className="max-w-xl mb-4 text-sm lg:text-base text-black md:text-base">
                <span className="font-semibold">CONNECT</span> with us where
                your services are listed and visible to a myriad of businesses
                seeking CA’s for compliance support
              </p>
              <form className="flex items-center w-full mt-11 -ml-1">
                <input
                  placeholder="Search by name"
                  required=""
                  type="text"
                  className="flex-grow w-full h-14 px-4 mb-3  bg-white border border-[#BFBFBF] rounded-xl"
                />
                <button
                  type="submit"
                  className="bg-[#0076CE] h-14 w-[186px] px-6 font-bold tracking-wide text-white rounded-xl -mt-3 -ml-4"
                >
                  Search
                </button>
              </form>
            </div>
            <div className="flex gap-4">
              <img src={picture1} alt="" className="lg:w-full w-28 mt-28" />
              <img
                src={picture2}
                alt=""
                className="lg:w-full w-28 h-fit mt-10"
              />
              <img
                src={picture3}
                alt=""
                className="lg:w-full w-28 h-fit mt-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
