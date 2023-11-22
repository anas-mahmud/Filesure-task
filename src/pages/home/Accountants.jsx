import { useEffect, useState } from "react";
import { getAllArtist } from "../../api/artistOperation";

const Accountants = () => {
  const [artists, setArtists] = useState([]);
  console.log(artists);

  useEffect(() => {
    getAllArtist().then((res) => setArtists(res));
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {artists.map((artist) => {
         //  console.log(artist.id);
          //  <div key={artist.id} className="p-8 bg-white border rounded shadow-sm">
          //    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          //      <a
          //        href="/"
          //        className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          //        aria-label="Category"
          //      >
          //        weekend
          //      </a>{" "}
          //      <span className="text-gray-600">— 1 Feb 2020</span>
          //    </p>
          //    <a
          //      href="/"
          //      aria-label="Article"
          //      title="Jingle Bells"
          //      className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          //    >
          //      Jingle Bells
          //    </a>
          //    <p className="mb-5 text-gray-700">
          //      Some pilots get picked and become television programs. Some don
          //      {"'"}
          //      t, become nothing.
          //    </p>
          //    <div className="flex items-center">
          //      <a href="/" aria-label="Author" title="Author" className="mr-3">
          //        <img
          //          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          //          alt="avatar"
          //          className="object-cover w-10 h-10 rounded-full shadow-sm"
          //        />
          //      </a>
          //      <div>
          //        <a
          //          href="/"
          //          aria-label="Author"
          //          title="Author"
          //          className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
          //        >
          //          Vasile Melinte
          //        </a>
          //        <p className="text-sm font-medium leading-4 text-gray-600">
          //          Author
          //        </p>
          //      </div>
          //    </div>
          //  </div>
          <article key={artist.id} className="rounded-xl border-2 border-gray-100 bg-white">
            <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
              <a href="#" className="block shrink-0">
                <img
                  alt="Speaker"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  className="h-14 w-14 rounded-lg object-cover"
                />
              </a>

              <div>
                <h3 className="font-medium sm:text-lg">
                  <a href="#" className="hover:underline">
                    Question about Livewire Rendering and Alpine JS
                  </a>
                </h3>

                <p className="line-clamp-2 text-sm text-gray-700">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusamus, accusantium temporibus iure delectus ut totam natus
                  nesciunt ex? Ducimus, enim.
                </p>

                <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                  <div className="flex items-center gap-1 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>

                    <p className="text-xs">14 comments</p>
                  </div>

                  <span className="hidden sm:block" aria-hidden="true">
                    &middot;
                  </span>

                  <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                    Posted by
                    <a
                      href="#"
                      className="font-medium underline hover:text-gray-700"
                    >
                      John
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>

                <span className="text-[10px] font-medium sm:text-xs">
                  Solved!
                </span>
              </strong>
            </div>
          </article>;
        })}

        <div className="p-8 bg-white border rounded shadow-sm">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              aria-label="Category"
            >
              holidays
            </a>{" "}
            <span className="text-gray-600">— 15 Nov 2020</span>
          </p>
          <a
            href="/"
            aria-label="Article"
            title="Happy new Year"
            className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Happy new Year
          </a>
          <p className="mb-5 text-gray-700">
            Pommy ipsum smeg head whizz morris dancers come hither, bugger
            codswallop gob. Taking the mick middle class bog.
          </p>
          <div className="flex items-center">
            <a href="/" aria-label="Author" title="Author" className="mr-3">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="avatar"
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </a>
            <div>
              <a
                href="/"
                aria-label="Author"
                title="Author"
                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                John Doe
              </a>
              <p className="text-sm font-medium leading-4 text-gray-600">
                Author
              </p>
            </div>
          </div>
        </div>
        <div className="p-8 bg-white border rounded shadow-sm">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              aria-label="Category"
            >
              programming
            </a>{" "}
            <span className="text-gray-600">— 28 Dec 2020</span>
          </p>
          <a
            href="/"
            aria-label="Article"
            title="Why i love C++"
            className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Why i love C++
          </a>
          <p className="mb-5 text-gray-700">
            Sportacus andrew weatherall goose Refined gentlemen super mario des
            lynam alpha trion zap rowsdower.
          </p>
          <div className="flex items-center">
            <a href="/" aria-label="Author" title="Author" className="mr-3">
              <img
                src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt="avatar"
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </a>
            <div>
              <a
                href="/"
                aria-label="Author"
                title="Author"
                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Andrew Larkin
              </a>
              <p className="text-sm font-medium leading-4 text-gray-600">
                Author
              </p>
            </div>
          </div>
        </div>
        <div className="p-8 bg-white border rounded shadow-sm">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              aria-label="Category"
            >
              programming
            </a>{" "}
            <span className="text-gray-600">— 28 Dec 2020</span>
          </p>
          <a
            href="/"
            aria-label="Article"
            title="Why i love C++"
            className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Why i love C++
          </a>
          <p className="mb-5 text-gray-700">
            Sportacus andrew weatherall goose Refined gentlemen super mario des
            lynam alpha trion zap rowsdower.
          </p>
          <div className="flex items-center">
            <a href="/" aria-label="Author" title="Author" className="mr-3">
              <img
                src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt="avatar"
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </a>
            <div>
              <a
                href="/"
                aria-label="Author"
                title="Author"
                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Andrew Larkin
              </a>
              <p className="text-sm font-medium leading-4 text-gray-600">
                Author
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountants;
