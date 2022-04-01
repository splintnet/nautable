import SEO from "../components/helper/seo";
import {fetchAPI} from "../lib/connect";
import SearchItem from "../components/search/item";

export const getServerSideProps = async () => {
  const {data} = await fetchAPI('/search', {
    page: 1,
    limit: 25,
    group: 'model',
  })
  return {
    props: {
      data: data,
    },
  };
};

export default function Search({data}) {
  return (
    <div>
      <SEO title="Search"/>

      <div
        className="container max-w-screen-xl mx-auto px-4 2xl:px-0 flex flex-col py-4 lg:flex-row lg:space-x-6 lg:pb-12">
        <aside className="flex flex-col lg:w-1/4 lg:space-y-8">
          <div className="flex-col items-center space-y-4 text-sm text-center
         lg:flex text-gray-700 hidden px-4 lg:block">
            <div className="flex flex-col items-center text-gray-700">

              <h2 className="mt-3 text-lg font-bold text-gray-700">Got Questions?</h2><p className="mt-2">We are here to
              help
              you plan the perfect holiday</p>
              <address className="flex flex-col items-center w-full pt-4 space-y-5 not-italic"><span
                className="space-x-2 text-base"><span>Phone:</span><a href="tel:+44 20 3318 3641"
                                                                      className="text-zz-blue-500 hover:text-zz-turquoise-500">+44 20 3318 3641</a></span><a
                className="w-full py-2 text-base font-bold text-zz-blue-500 bg-white border-2 border-zz-blue-500 rounded-md hover:border-zz-turquoise-500 hover:text-zz-turquoise-500"
                href="https://help.zizoo.com/s/contactsupport?language=en_US">Contact Us</a></address>
            </div>
          </div>
          <div className="relative hidden w-full h-full lg:block">
            asd
          </div>
        </aside>
        <main className="flex flex-col flex-1 pb-10 space-y-4 lg:p-0">
          <div className="mb-2 flex justify-end">
            <div
              className="flex flex-row items-center lg:w-auto relative pl-2 lg:mt-1.5 flex-grow-0 flex-shrink-0 lg:p-0 ml-auto w-8 h-8">
              <label htmlFor="search-order_by"
                     className="hidden mr-2 text-sm font-semibold text-zz-blue-500 lg:inline-block">Sort
                by</label>
              <div className="absolute lg:static"><select name="order_by"
id="search-order_by"
                                                          className="w-8 h-8 overflow-hidden border-none rounded-md p-0 cursor-pointer">
                <option value="recommended">Zizoo recommended</option>
                <option value="price_listing">Price ▲</option>
                <option value="price_listing_high">Price ▼</option>
                <option value="discount">Discount</option>
              </select>
                <div
                  className="w-8 h-8 absolute inset-y-0 right-0 flex items-center border-none rounded-md pointer-events-none bg-zz-blue-500 hover:bg-zz-turquoise-500 text-zz-blue-500">
                  <svg className="mx-auto"
width="20"
height="16"
viewBox="0 0 20 16"
fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
clipRule="evenodd"
                          d="M5.0017 0.536842C5.18422 0.353311 5.43174 0.250209 5.68983 0.250209C5.94792 0.250209 6.19543 0.353311 6.37796 0.536842L10.2712 4.45276C10.4485 4.6374 10.5466 4.88469 10.5444 5.14138C10.5421 5.39807 10.4398 5.64361 10.2593 5.82512C10.0789 6.00663 9.83475 6.10959 9.57955 6.11182C9.32435 6.11405 9.07849 6.01537 8.89492 5.83704L6.66313 3.59224V14.9347C6.66313 15.1944 6.56059 15.4434 6.37806 15.627C6.19553 15.8106 5.94797 15.9137 5.68983 15.9137C5.43169 15.9137 5.18413 15.8106 5.0016 15.627C4.81907 15.4434 4.71652 15.1944 4.71652 14.9347V3.59224L2.48473 5.83704C2.30117 6.01537 2.05531 6.11405 1.80011 6.11182C1.54491 6.10959 1.3008 6.00663 1.12034 5.82512C0.939878 5.64361 0.837516 5.39807 0.835298 5.14138C0.833081 4.88469 0.931184 4.6374 1.10848 4.45276L5.0017 0.536842ZM14.1458 12.5715V1.22898C14.1458 0.969339 14.2483 0.720332 14.4309 0.536737C14.6134 0.353142 14.861 0.25 15.1191 0.25C15.3772 0.25 15.6248 0.353142 15.8073 0.536737C15.9899 0.720332 16.0924 0.969339 16.0924 1.22898V12.5715L18.3242 10.3266C18.5078 10.1483 18.7536 10.0496 19.0088 10.0519C19.264 10.0541 19.5081 10.1571 19.6886 10.3386C19.869 10.5201 19.9714 10.7656 19.9736 11.0223C19.9758 11.279 19.8777 11.5263 19.7004 11.7109L15.8072 15.6269C15.6247 15.8104 15.3772 15.9135 15.1191 15.9135C14.861 15.9135 14.6135 15.8104 14.431 15.6269L10.5378 11.7109C10.3605 11.5263 10.2624 11.279 10.2646 11.0223C10.2668 10.7656 10.3691 10.5201 10.5496 10.3386C10.7301 10.1571 10.9742 10.0541 11.2294 10.0519C11.4846 10.0496 11.7304 10.1483 11.914 10.3266L14.1458 12.5715Z"
                          fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <ul className="flex flex-col space-y-3 lg:space-y-4">


            {data.map((item) => (
              <SearchItem item={item}/>
            ))}


            <li id="disruptor">
              <div>
                <article
                  className="bg-white px-6 py-6  text-gray-900 md:py-12 md:px-12 transition-colors duration-700 ease-in-out shadow rounded-lg">
                  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get £50 off your next booking</h2><p
                  className="max-w-3xl mt-3 text-lg text-gray-500">Subscribe to our newsletter to get a £50 voucher,
                  plus
                  all our top offers and exclusive deals.</p>
                  <div className="mt-8 sm:w-full sm:max-w-md">
                    <form noValidate=""
method="post"
className="sm:flex"><label htmlFor="email-address"
                                                                                 className="sr-only">Email
                      address</label><input id="email-address"
name="email-address"
type="email"
autoComplete="email"
                                            required=""
                                            className="w-full px-5 py-3 border  shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-zz-blue-500 focus:border-zz-blue-500 sm:max-w-xs rounded-md border-gray-300"
                                            placeholder="Enter your email"
aria-label="Enter your email"/>
                      <button
                        className="inline-flex items-center border border-transparent font-medium rounded shadow-sm text-white bg-zz-blue-500 hover:bg-zz-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zz-blue-500 mt-3 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0 px-6 py-3 text-base font-medium"
                        type="submit">Subscribe
                      </button>
                    </form>
                    <div className="mt-3 text-sm text-gray-500 has-link-tw">We care about the protection of your data.
                      Read
                      our <a href="/en/data-policy"
target="_blank">Privacy Policy</a>.
                    </div>
                  </div>
                </article>
              </div>
            </li>
          </ul>
          <div className="flex flex-row space-x-2 text-sm text-zz-blue-500">Boats' ranking may be impacted by our
            agreements
            with partners.
          </div>
          <div className="flex flex-row items-center justify-between mx-auto w-full lg:max-w-xl">
            <button
              className="border text-xl rounded-full w-12 h-12 lg:w-16 lg:h-16 hover:opacity-75 active:shadow-none pointer-events-none border-gray-200 text-gray-200"
              disabled="">
              <svg className="mx-auto w-6 h-6 lg:w-1/4 lg:h-9 rotate-180">
                <use href="#chevron-right-v2" />
              </svg>
            </button>
            <span className="text-xl text-zz-blue-500">Page 1 of 389</span>
            <button
              className="border text-xl rounded-full w-12 h-12 lg:w-16 lg:h-16 hover:opacity-75 active:shadow-none shadow-md border-zz-turquoise-500 text-zz-turquoise-500">
              <svg className="mx-auto w-6 h-6 lg:w-1/4 lg:h-9">
                <use href="#chevron-right-v2" />
              </svg>
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}
