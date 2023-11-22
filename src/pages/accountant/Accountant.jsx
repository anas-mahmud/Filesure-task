import { LuCalendarRange } from "react-icons/lu";
import RecommendAccountant from "./RecommendAccountant";
import { getArtistById } from "../../api/artistOperation";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Accountant = () => {
  const [artist, setArtist] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getArtistById(id).then((res) => setArtist(res));
  }, [id]);

  return (
    <div>
      <div className="my-16">
        <div className="max-w-xl h-full p-6 py-12 lg:ml-20 lg:px-8 lg:max-w-[1420px]">
          <div className="flex flex-col lg:flex-row gap-36">
            <div className="lg:w-96 h-96 ">
              <div className="text-black text-3xl font-bold">
                {artist.name}
              </div>
              <div className="w-96 text-black font-normal leading-loose mt-4">
                {artist.intro}
              </div>
              <div className="my-6">
                <span className="text-sky-600 text-xl font-bold">
                  {artist.rating}{" "} 
                </span>
                <span className="text-black text-xl font-normal">
                  ({artist.reviewCount})
                </span>
              </div>
              <div className="w-full max-w-sm px-5 py-5 bg-white rounded-md shadow-md">
                <div className="flex justify-between">
                  <h1 className="text-sm font-semibold">
                    {artist.taskComplexity}
                  </h1>
                  <span className="text-base font-bold">{artist.price}</span>
                </div>
                <div className="flex gap-2 my-4">
                  <LuCalendarRange className="text-sky-600" />
                  <p className="text-sm text-gray-600 -mt-[2px]">
                    {artist.deliveryTime}
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="px-5 py-2.5 bg-sky-600 rounded-lg justify-center items-center gap-2 inline-flex">
                    <div className="text-center text-white text-base font-bold leading-relaxed">
                      Request Proposal
                    </div>
                  </div>
                  <div className=" px-5 py-2.5 rounded-lg border border-sky-600 justify-center items-center gap-2 inline-flex">
                    <div className="text-center text-sky-600 text-base font-bold leading-relaxed">
                      Chat with me
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-lg border border-gray-100 bg-white p-6">
                <h3 className="text-3xl font-bold">
                  {artist.testimonial?.author}
                </h3>
                <p className="mt-3">{artist.testimonial?.text}</p>
                <div className="w-20 h-2 flex gap-2 mx-auto mt-5">
                  <div className="w-8 h-2 bg-sky-600 rounded-3xl" />
                  <div className="w-2 h-2 bg-stone-300 rounded-full" />
                  <div className="w-2 h-2 bg-stone-300 rounded-full" />
                  <div className="w-2 h-2 bg-stone-300 rounded-full" />
                </div>
              </div>
            </div>
            <div>
              <img
                src={artist.image}
                alt="Accountant Image"
                className="-ml-0 mt-10 w-[800px] h-[420px] lg:mt-0 mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
              <div className="w-5/6">
                <h2 className="text-4xl font-bold my-8">About {artist.name}</h2>
                <div className="flex justify-between gap-12">
                  <div>
                    <p className="text-[#999] font-semibold">FROM</p>
                    <p className="text-lg">{artist.about?.from}</p>
                  </div>
                  <div>
                    <p className="text-[#999] font-semibold">PARTNER SINCE</p>
                    <p className="text-lg">{artist.about?.partnerSince}</p>
                  </div>
                  <div>
                    <p className="text-[#999] font-semibold">
                      AVERAGE RESPONSE TIME
                    </p>
                    <p className="text-lg">
                      {artist.about?.averageResponseTime}
                    </p>
                  </div>
                </div>
                <div className="my-8">
                  <p className="text-[#999] font-semibold">ABOUT</p>
                  <p className="text-lg">{artist.about?.description}</p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-[#999] font-semibold">SERVICE I OFFER</p>
                    <ul className="list-disc px-5 mt-2">
                      {artist.about?.services.map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[#999] font-semibold">WHY ME?</p>
                    <ul className="list-disc px-5 mt-2">
                      {artist.about?.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RecommendAccountant id={id} />
    </div>
  );
};

export default Accountant;
