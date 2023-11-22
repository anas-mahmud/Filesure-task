// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Accountants = ({ accountants }) => {
  return (
    <>
      {accountants?.map((accountant) => (
        <div key={accountant.id} className="w-3/5 mx-auto rounded my-14 flex transition shadow-lg">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              dateTime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>{accountant.about.partnerSince}</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>{accountant.rating}</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <img
              alt="Guitar"
              src={accountant.image}
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold uppercase text-3xl">
                  {accountant.name}
                </h3>
              </a>

              <p className="mt-4">
               {accountant.intro}
              </p>
              <p className="font-semibold mt-5">
               Price: {accountant.price}
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <Link
                to={`${accountant._id}`}
                className="block bg-[#0076CE] px-5 py-3 text-center text-white text-xs font-bold uppercase"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

// Accountants.propTypes = {
//    accountants: PropTypes.arrayOf(
//      PropTypes.shape()
//    ),
//  };

export default Accountants;
