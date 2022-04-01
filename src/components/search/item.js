export default function SearchItem({ item }) {
  return (

    <li id="search-result-0">
      <div>
        <a
          className="flex flex-col justify-center space-y-4 text-zz-blue-500 hover:text-zz-blue-500"
          href="/en/b/speedboat-pacific-625-open-25319/?date_from=2022-05-11&amp;date_to=2022-05-13"
        >
          <article className="self-center w-full overflow-hidden bg-white rounded-lg shadow group">
            <div
              className="relative w-full grid-flow-col overflow-hidden grid-cols-boat-card auto-cols-auto auto-rows-auto sm:grid gap-x-4"
            >
              <div className="relative flex flex-col flex-no-wrap row-start-1 row-end-4 sm:flex-row" />
              <header className="pt-3.5 px-3.5 sm:px-0 row-start-1 col-start-2 col-end-4 space-y-1.5">
                <h2
                  className="text-base font-semibold leading-6 text-zz-blue-500 line-clamp-2 sm:text-lg"
                >
                  {item.boat.title}
                </h2>
                <h3 className="text-sm font-normal leading-none text-zz-blue-400 line-clamp-1">
                  <svg className="inline w-5 h-5 mr-1 text-zz-blue-500">
                    <use href="#destination" />
                  </svg>
                  Club de Mar-Mallorca, Palma, Spain
                </h3>
              </header>
              <div
                id="specs"
                className="flex-1 md:flex md:flex-col self-center w-full text-sm leading-5 font-normal text-zz-blue-400 row-start-2 col-start-2 col-end-4 pt-3.5 px-3.5 sm:pb-3.5 sm:px-0"
              >
                <ul className="inline list-none md:block">
                  <li className="inline before:content-['·'] before:mx-1 first-of-type:before:hidden">
                    7 max.
                    guests
                  </li>
                  <li className="inline before:content-['·'] before:mx-1 first-of-type:before:hidden">
                    5.99 m
                    long
                  </li>
                </ul>
                <ul className="inline list-none md:block">
                  <li className="inline before:content-['·'] before:mx-1 md:first-of-type:before:hidden">
                    Captain
                    optional
                  </li>
                  <li className="inline before:content-['·'] before:mx-1 first-of-type:before:hidden">
                    35 kt max
                    speed
                  </li>
                  <li className="inline before:content-['·'] before:mx-1 first-of-type:before:hidden">
                    115 hp
                    engine
                  </li>
                </ul>
              </div>
              <div
                id="badges"
                className="flex flex-col sm:justify-end space-y-1 pt-3.5 sm:pt-0 px-3.5 sm:px-0 sm:pb-3.5 row-start-3"
              >
                <div className="flex flex-wrap gap-1">
                  <div
                    className="inline-flex text-xs leading-4 font-medium rounded-xl py-1 px-2.5 bg-green-100 text-green-800 sm:inline-flex"
                  >
                    Bimini
                    top
                  </div>
                </div>
              </div>
              <div
                id="rating"
                className="row-span-full absolute sm:relative top-3.5 right-3.5 flex flex-col sm:justify-start sm:items-end col-end-5"
              >
                <div className="px-2 text-sm font-medium leading-5 rounded-md text-zz-blue-500 bg-gray-50">
                  ★ 5.0
                </div>
                <div
                  className="pt-1.5 text-zz-blue-400 hidden sm:block text-sm leading-none text-right font-normal"
                >
                  2
                  ratings
                </div>
              </div>
              <div
                id="price"
                className="flex flex-col w-full justify-end items-end row-end-4 sm:self-end p-3.5 sm:pl-0 sm:pt-0 col-start-3 col-end-5"
              >
                <div className="flex flex-row items-end justify-end space-x-2 sm:flex-col sm:pt-0">
                  <div
                    className="text-xs leading-4 font-medium bg-gray-50 rounded-xl text-zz-blue-500 text-center py-1 px-2.5 ml-auto sm:mb-1"
                  >
                    price
                    for 3 days
                  </div>
                  <div className="space-y-1">
                    <span
                      className="text-base font-bold leading-6 text-zz-blue-500 sm:text-lg"
                    >
                      £944
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </a>
      </div>
    </li>
  );
}
