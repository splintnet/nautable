import SEO from "../components/helper/seo";
import ShopifyTopUps from "../components/home/top-ups";
import ShopifyServices from "../components/home/services";
import {DateRangePicker} from 'react-dates';
import {useState} from "react";
import Reviews from "../components/home/Reviews";

export default function Zizoo() {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [focusedInput, setFocusedInput] = useState(false)
  
  return (
    <div>
      <SEO title="Nautable"/>

      <div className="homepage_hero__3W8Hd py-8 text-white bg-gray-200 relative bg-cover bg-no-repeat bg-center"><span
        className="absolute inset-x-0 bottom-0 w-full h-full overlay"></span>
        <div className="container max-w-screen-xl mx-auto px-4 2xl:px-0 relative">
          <div className="flex flex-col max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col pr-16 md:pr-0"><h1
              className="inline-block mb-2 text-2xl font-semibold tracking-tight lg:text-5xl">Boat holidays made
              easy</h1>
              <span className="inline-block text-sm lg:text-xl">Rent a boat from the #1 yacht charter platform</span>
            </div>
            <form id="hp-search-form" action="/en/search/" method="get"
                  className="flex flex-col items-center px-4 py-5 -mx-4 space-y-2 bg-gray-100 lg:mx-0 lg:rounded-md lg:space-y-0 lg:space-x-4 lg:flex-row">
              <div className="relative w-full bg-white rounded lg:flex-1">
                <svg viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                     className="absolute right-0 w-5 h-6 -mt-px pointer-events-none text-zz-blue-500 top-3 left-2">
                  <path d="M9.08 12.432a3.323 3.323 0 100-6.645 3.323 3.323 0 000 6.645z" stroke="currentColor"
                        strokeMiterlimit="10"></path>
                  <path
                    d="M8.394 22.768c.271.32.767.304 1.038-.016 1.742-2.076 7.333-9.026 7.54-13.243.048-.847.256-4.872-3.498-7.22-2.3-1.454-5.112-1.646-7.732-.736-2.604.895-5.112 3.403-4.697 8.02.016-.016.096 4.904 7.349 13.195z"
                    stroke="currentColor" strokeMiterlimit="10"></path>
                </svg>
                <div data-testid="location-selector" className="relative">
                  <div className="pl-10 rounded shadow-sm css-b62m3t-container"><span
                    id="react-select-location-autocomplete-live-region" className="css-7pg0cj-a11yText"></span><span
                    aria-live="polite" aria-atomic="false" aria-relevant="additions text"
                    className="css-7pg0cj-a11yText"></span>
                    <div className="react-select__control css-1bm0xwy-control">
                      <div className="react-select__value-container css-yhblc2">
                        <div id="react-select-location-autocomplete-placeholder"
                             className="react-select__placeholder css-52zael-placeholder">Choose your destination
                        </div>
                        <div data-value="" className="react-select__input-container css-clbtef"><input
                          autoCapitalize="none" autoComplete="off" autoCorrect="off"
                          id="react-select-location-autocomplete-input" spellCheck="false" tabIndex="0" type="text"
                          value="" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true"
                          aria-controls="react-select-location-autocomplete-listbox"
                          aria-owns="react-select-location-autocomplete-listbox" aria-label="Choose your destination"
                          role="combobox" aria-describedby="react-select-location-autocomplete-placeholder"
                          className="react-select__input"/></div>
                      </div>
                      <div className="react-select__indicators css-1wy0on6"><span
                        className="react-select__indicator-separator css-1hyfx7x"></span>
                        <div aria-hidden="true"
                             className="react-select__indicator react-select__dropdown-indicator css-1hyfx7x">
                          <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false"
                               className="css-8mmkcg">
                            <path
                              d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <input name="location" type="hidden" value=""/></div>
                </div>
              </div>
              <div className="relative w-full lg:w-56 h-11">
                <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                     className="absolute w-5 h-5 pointer-events-none z-5 left-3 top-3 text-zz-blue-500">
                  <path
                    d="M19.869 21H2.102a1.117 1.117 0 01-1.116-1.117V3.843c0-.624.507-1.117 1.116-1.117H19.87c.623 0 1.116.508 1.116 1.117v16.026A1.111 1.111 0 0119.87 21z"
                    fill="#fff" stroke="currentColor" strokeWidth="1.053" strokeMiterlimit="10"></path>
                  <path
                    d="M15.59 5.322h.436c.623 0 1.116-.508 1.116-1.117v-2.03c0-.624-.507-1.117-1.116-1.117h-.436c-.623 0-1.116.508-1.116 1.117V4.19a1.12 1.12 0 001.116 1.13zM6.149 5.25h.435c.624 0 1.117-.508 1.117-1.117V2.117C7.7 1.493 7.193 1 6.584 1h-.435c-.624 0-1.117.508-1.117 1.117v2.016c0 .623.508 1.116 1.117 1.116z"
                    fill="#fff" stroke="currentColor" strokeWidth="1.053" strokeMiterlimit="10"></path>
                  <path d="M.986 8.542H21" stroke="currentColor" strokeWidth="1.053" strokeMiterlimit="10"></path>
                  <path
                    d="M11.762 12.124h-1.625a.223.223 0 01-.217-.218v-.058c0-.116.101-.217.217-.217h1.625c.116 0 .217.101.217.217v.058c0 .13-.087.218-.217.218zM17.897 12.124h-1.625a.223.223 0 01-.218-.218v-.058c0-.116.102-.217.218-.217h1.625c.116 0 .217.101.217.217v.058c0 .13-.101.218-.217.218zM11.762 15.083h-1.625a.223.223 0 01-.217-.218v-.058c0-.116.101-.218.217-.218h1.625c.116 0 .217.102.217.218v.043c0 .131-.087.233-.217.233zM17.897 15.083h-1.625a.223.223 0 01-.218-.218v-.058c0-.116.102-.218.218-.218h1.625c.116 0 .217.102.217.218v.043c0 .131-.101.233-.217.233zM5.641 18.085H4.017a.223.223 0 01-.218-.218v-.058c0-.116.102-.217.218-.217H5.64c.116 0 .218.101.218.217v.058a.223.223 0 01-.218.218zM11.834 18.056H10.21a.223.223 0 01-.218-.218v-.058c0-.116.102-.217.218-.217h1.624c.116 0 .218.101.218.217v.058a.223.223 0 01-.218.218zM17.97 18.027h-1.625a.223.223 0 01-.218-.218v-.058c0-.116.102-.217.218-.217h1.624c.116 0 .218.101.218.217v.058c.014.116-.087.218-.218.218zM5.583 14.996H3.96a.223.223 0 01-.218-.218v-.058c0-.116.102-.218.218-.218h1.624c.116 0 .218.102.218.218v.058c0 .13-.102.218-.218.218zM5.525 12.139H3.901a.223.223 0 01-.218-.218v-.058c0-.116.102-.218.218-.218h1.624c.116 0 .218.102.218.218v.058a.223.223 0 01-.218.218z"
                    fill="currentColor"></path>
                </svg>

                <DateRangePicker
                  className="w-full text-base truncate bg-white rounded shadow-sm cursor-pointer select-none pl-11 h-full border-none text-zz-blue-500"
                  startDate={startDate} // momentPropTypes.momentObj or null,
                  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                  endDate={endDate} // momentPropTypes.momentObj or null,
                  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                  onDatesChange={({startDate, endDate}) => {
                    setStartDate(startDate)
                    setEndDate(endDate)
                  }} // PropTypes.func.isRequired,
                  focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                  onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
                />
              </div>
              <button
                className="border border-transparent rounded text-center appearance-none select-none bg-zz-orange-500 text-white hover:text-white hover:bg-zz-orange-400 active:bg-zz-orange-400 text-base px-6 w-full lg:w-48 h-11">Search
              </button>
            </form>
            <div className="hidden partners lg:flex lg:justify-around">
              <div className="flex flex-col space-y-4"><span className="text-sm font-semibold">Our partners:</span><img
                src="https://cdn.zizoo.com/media/images/hero/partners.png" alt="Our partners:" width="228" height="24"/>
              </div>
              <div className="flex flex-col space-y-4"><span
                className="text-sm font-semibold">Zizoo in the press:</span><img
                src="https://cdn.zizoo.com/media/images/hero/press.png" alt="Zizoo in the press:" width="415"
                height="24"/></div>
            </div>
          </div>
          <a href="#trustpilot" tabIndex="-1" className="absolute top-0 right-0 mr-4 -mt-8 overflow-hidden"><span
            className="trustpilot-badge_trustpilotBadge__1GRrA inline-flex justify-center text-center">
            trust
          </span></a>
        </div>
      </div>
      <ShopifyTopUps/>
      <ShopifyServices/>
      <Reviews/>
    </div>
  )
}