import { useEffect, useState } from "react";
import { getRestAccountantById } from "../../api/accountantOperation";
import { Link } from "react-router-dom";

const RecommendAccountant = ({ id }) => {
  const [accountants, setAccountants] = useState([]);

  useEffect(() => {
    getRestAccountantById(id).then((res) => setAccountants(res));
  }, [id]);

  return (
    <div className="ml-8 lg:ml-36 mb-10">
      <h2 className="text-2xl lg:text-4xl font-bold my-6">Recommended for you</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6">
        {accountants?.slice(0, 3).map((accountant) => (
          <div
            key={accountant.id}
            className="w-[336px] rounded-lg shadow transition hover:shadow-lg"
          >
            <img
              alt="Accountant Image"
              src={accountant.image}
              className="w-full h-56 rounded-t-md object-cover"
            />

            <div className="bg-white rounded-md p-4 sm:p-6">
              <div className="flex justify-between">
                <h3 className="text-xl font-bold">{accountant.name}</h3>
                <p className="text-lg font-bold">{accountant.price}</p>
              </div>

              <p className="mt-2">{accountant.intro}</p>
              <div className="my-2">
                <span className="text-sky-600 text-xs font-bold">
                  {accountant.rating}{" "}
                </span>
                <span className="text-black text-xs font-normal">
                  ({accountant.reviewCount})
                </span>
              </div>
              <Link to={`/${accountant._id}`}>
                <button className="ml-3 mt-4 -mb-1 py-3 px-20 rounded-md bg-sky-600 text-white font-semibold">
                  View services
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendAccountant;
