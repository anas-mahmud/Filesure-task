import { useEffect, useState } from "react";
import { getRestArtistById } from "../../api/artistOperation";
import { Link } from "react-router-dom";

const RecommendAccountant = ({ id }) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getRestArtistById(id).then((res) => setArtists(res));
  }, [id]);

  return (
    <div className="ml-20 mb-10">
      <h2 className="text-4xl font-bold my-6">Recommended for you</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {artists?.slice(0, 3).map((artist) => (
          <div
            key={artist.id}
            className="w-[336px] rounded-lg shadow transition hover:shadow-lg"
          >
            <img
              alt="Accountant Image"
              src={artist.image}
              className="h-56 rounded-t-md object-cover"
            />

            <div className="bg-white rounded-md p-4 sm:p-6">
              <div className="flex justify-between">
                <h3 className="text-xl font-bold">{artist.name}</h3>
                <p className="text-lg font-bold">{artist.price}</p>
              </div>

              <p className="mt-2">{artist.intro}</p>
              <div className="my-2">
                <span className="text-sky-600 text-xs font-bold">
                  {artist.rating}{" "}
                </span>
                <span className="text-black text-xs font-normal">
                  ({artist.reviewCount})
                </span>
              </div>
              <Link to={`/${artist._id}`}>
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
