import img from "../../assets/Rectangle 376.png";
import { LuCalendarRange } from "react-icons/lu";
import RecommendAccountant from "./RecommendAccountant";

const Accountant = () => {
  return (
    <div>
      <div className="my-16">
        <div className="max-w-xl h-full p-6 py-12 ml-20 lg:px-8 lg:max-w-[1420px]">
          <div className="flex flex-col lg:flex-row gap-36">
            <div className=" w-96 h-96 ">
              <div className="  text-black text-3xl font-bold">
                Michael Jackson
              </div>
              <div className="w-96 text-black text-sm font-normal leading-loose mt-4">
                I am here to provide my expertise in accounting and finance,
                which includes financial statements, economics, and auditing,
                all to assist you effectively
              </div>
              <div className="my-6">
                <span className="text-sky-600 text-xl font-bold">4.8 </span>
                <span className="text-black text-xl font-normal">(89)</span>
              </div>
              <div className="w-full max-w-sm px-5 py-5 bg-white rounded-md shadow-md">
                <div className="flex justify-between">
                  <h1 className="text-sm font-semibold">
                    Basic to complex tasks
                  </h1>
                  <span className="text-base font-bold">₹4,370</span>
                </div>
                <div className="flex gap-2 my-4">
                  <LuCalendarRange className="text-sky-600" />
                  <p className="text-sm text-gray-600 -mt-[2px]">
                    Delivers the job within 2 days
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
                <h3 className="text-3xl font-bold">What people say?</h3>
                <p className="mt-3">
                  I cannot express enough gratitude for the support Micheal has
                  provided in managing my personal finances. Their attention to
                  detail and deep understanding of financial markets has ensured
                  that my investments are in safe hands. I highly recommend
                  their services to anyone seeking financial guidance.
                </p>
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
                src={img}
                alt=""
                className="-ml-0 mt-10 lg:mt-0 mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
              <div className="w-5/6">
                <h2 className="text-4xl font-bold my-8">
                  About Michael Jackson
                </h2>
                <div className="flex justify-between">
                  <div>
                    <p className="text-[#999] font-semibold">FROM</p>
                    <p className="text-lg">INDIA</p>
                  </div>
                  <div>
                    <p className="text-[#999] font-semibold">PARTNER SINCE</p>
                    <p className="text-lg">2011</p>
                  </div>
                  <div>
                    <p className="text-[#999] font-semibold">
                      AVERAGE RESPONSE TIME
                    </p>
                    <p className="text-lg">30 minutes</p>
                  </div>
                </div>
                <div className="my-8">
                  <p className="text-[#999] font-semibold">ABOUT</p>
                  <p className="text-lg">
                    I am a Professional Charted Accountant here to offer
                    professional services of accounting and finance, financial
                    statements, Bookkeeping in affordable price.
                  </p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-[#999] font-semibold">SERVICE I OFFER</p>
                    <ul className="list-disc px-5 mt-2">
                      <li>Financial accounting Balance Sheets</li>
                      <li>Bookkeeping</li>
                      <li>Accounting and finance</li>
                      <li>Corporate Finance</li>
                      <li>Maintain Charts of Accounts</li>
                      <li>Profit and loss statements</li>
                      <li>Bank Reconciliation</li>
                      <li>Financial statements</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[#999] font-semibold">WHY ME?</p>
                    <ul className="list-disc px-5 mt-2">
                      <li>Financial accounting Balance Sheets</li>
                      <li>Bookkeeping</li>
                      <li>Accounting and finance</li>
                      <li>Corporate Finance</li>
                      <li>Maintain Charts of Accounts</li>
                      <li>Profit and loss statements</li>
                      <li>Bank Reconciliation</li>
                      <li>Financial statements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RecommendAccountant />
    </div>
  );
};

export default Accountant;
