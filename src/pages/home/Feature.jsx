import search from "../../assets/feature/search.png";
import support from "../../assets/feature/support.png";
import book from "../../assets/feature/book.png";
import cap from "../../assets/feature/cap.png";
import student from "../../assets/feature/student.png";
import teacher from "../../assets/feature/teacher.png";

const Feature = () => {
  return (
    <div className="px-6 py-14 mx-auto">
      <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
        <div className="w-1/2 ml-16 -mt-20">
          <h1 className="text-5xl font-bold leading-snug">
            <span className="bg-gradient-to-r from-[#0076CE] to-[#9400D3] bg-clip-text text-transparent">
              All-in-One
            </span>{" "}
            platform
            <br />
            that Makes Easier
          </h1>
          <p className="mt-3">
            We are more than a platform; We are your <br /> success partner.
            Discover our services to achieve <br /> your business and
            educational goals
          </p>
          <div className="w-[604px] grid grid-cols-1 md:grid-cols-2 gap-y-4 mt-8">
            <div className="flex gap-4">
              <img className="w-16 h-16" src={search} alt="" />

              <div className="">
                <p className="text-black">
                  <span className="font-bold">SEARCH</span>
                  <span className="">
                    {" "}
                    for vital <br /> company <br /> information{" "}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img className="w-16 h-16" src={support} alt="" />

              <div className="">
                <p className="text-black">
                  <span className="font-bold">CONNECT</span>
                  <span className="">
                    {" "}
                    with the <br /> resources to meet <br /> your business needs{" "}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img className="w-16 h-16" src={book} alt="" />

              <div className="">
                <p className="text-black">
                  <span className="font-bold">RESEARCH</span>
                  <span className="">
                    {" "}
                    and <br /> generate reports <br /> that drive growth{" "}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img className="w-16 h-16" src={cap} alt="" />

              <div className="">
                <p className="text-black">
                  <span className="font-bold">ACADEMY</span>
                  <span className="">
                    {" "}
                    to give you <br /> the skills for success <br /> in your
                    career{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 lg:justify-center h-2/3">
          <div className="flex justify-around">
            <div className="w-96">
              <div>
                <div className="h-9 px-4 py-2 bg-purple-200 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-sm justify-start items-start gap-2.5 inline-flex">
                  <div className="VitaeViverraUtNon text-black text-sm font-normal font-['Open Sans'] leading-snug">
                    Hey, check out loreumipsum services.{" "}
                  </div>
                </div>
                <div className="mt-2 h-9 px-4 py-2 bg-purple-200 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-sm justify-start items-start gap-2.5 inline-flex">
                  <div className="VitaeViverraUtNon text-black text-sm font-normal font-['Open Sans'] leading-snug">
                    I learned from their videos, got my first job.
                  </div>
                </div>
                <div className="mt-2 h-9 px-4 py-2 bg-purple-200 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-sm justify-start items-start gap-2.5 inline-flex">
                  <div className="VitaeViverraUtNon text-black text-sm font-normal font-['Open Sans'] leading-snug">
                    You won{"' "}t be disappointed with their services.
                  </div>
                </div>
              </div>
              <div className="mt-8 ml-32">
                <div className="w-72 h-9 px-4 py-2 bg-sky-100 rounded-tl-2xl rounded-tr-2xl rounded-bl-sm rounded-br-2xl justify-start items-start gap-2.5 inline-flex">
                  <div className="VitaeViverraUtNon text-black text-sm font-normal font-['Poppins'] leading-snug">
                    I got a perfect analysis report from them too
                  </div>
                </div>
                <div className="mt-2 w-36 h-9 px-4 py-2 bg-sky-100 rounded-tl-2xl rounded-tr-2xl rounded-bl-sm rounded-br-2xl justify-start items-start gap-2.5 ">
                  <div className="VitaeViverraUtNon text-black text-sm font-normal font-['Poppins'] leading-snug">
                    Oh, that{"'"}s great.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="233"
                height="310"
                viewBox="0 0 233 310"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M232.117 157.811C232.126 200.963 219.152 243.708 192.605 273.144C166.842 301.71 130.717 312.068 95.5652 309.224C62.7774 306.57 31.421 288.946 10.8974 258.44C-16.5268 217.677 18.3 186.813 18.3 147.657C18.3 108.5 1.04975 106.256 5.92257 58.8804C10.532 14.0654 62.2614 0.834357 95.5652 0.834345C131.585 0.834331 166.851 13.2989 192.556 42.5359C218.78 72.3633 232.108 114.671 232.117 157.811Z"
                  fill="#EFD9F9"
                />
              </svg>
              <img
                className="w-[235px] h-[320px] -mt-[325px]"
                src={student}
                alt=""
              />
            </div>
          </div>
          <div className="-mt-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="265"
              height="340"
              viewBox="0 0 265 340"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.603528 173.126C0.593605 220.409 14.8099 267.246 43.8993 299.501C72.1284 330.803 111.713 342.152 150.23 339.035C186.157 336.128 220.516 316.816 243.005 283.39C263.492 252.938 267.946 211.436 261.85 173.126C256.723 140.902 230.46 123.798 213.496 97.9328C191.78 64.8223 184.468 13.2626 150.23 2.93925C112.441 -8.45468 72.1185 14.7763 43.9523 46.8126C15.2173 79.496 0.613449 125.854 0.603528 173.126Z"
                fill="#DDF3FF"
              />
            </svg>
            <img
              className="w-[250px] h-[340px] -mt-[345px]"
              src={teacher}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
