import img from "../../assets/Rectangle 376.png";

const RecommendAccountant = () => {
  return (
    <div className="ml-20">
      <h2 className="text-4xl font-bold my-6">Recommended for you</h2>
      <div className="w-[336px] rounded-lg shadow transition hover:shadow-lg">
        <img
          alt="Office"
          src={img}
          className="h-56 rounded-t-md object-cover"
        />

        <div className="bg-white rounded-md p-4 sm:p-6 mb-10">
          <div className="flex justify-between">
            <h3 className="text-xl font-bold">Michael Jackson</h3>
            <p className="text-lg font-bold">₹4,370</p>
          </div>

          <p className="mt-2">
            I will do business evaluation and corporate services
          </p>
          <div className="my-2">
            <span className="text-sky-600 text-xs font-bold">4.8 </span>
            <span className="text-black text-xs font-normal">(89)</span>
          </div>
        <button className="ml-3 mt-4 -mb-1 py-3 px-20 rounded-md bg-sky-600 text-white font-semibold">View services</button>
        </div>
      </div>
    </div>
  );
};

export default RecommendAccountant;
