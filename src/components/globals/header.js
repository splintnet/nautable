import {useContext} from 'react'
import ContactModal from "./contact";
import NextLink from '../helper/link'

import {DispatchStateContext, GlobalStateContext} from "../../lib/app-server-context";


export default function Header() {

  const useGlobalState = () => [
    useContext(GlobalStateContext),
    useContext(DispatchStateContext)
  ];

  const [state, dispatch] = useGlobalState();

  return (
    <>
      <ContactModal open={state.open} setOpen={(v) => dispatch({open: v})}/>
      <header className="relative">
        <div className="contents"><a href="https://www.trustpilot.com/review/zizoo.com" target="_blank"
                                     rel="noopener noreferrer" className="hover:text-gray-700">
          <div className="h-8 py-1 mx-auto text-center bg-gray-50">
            <div className="opacity-75"><span className="text-sm font-medium">Excellent</span><span
              className="mx-1 text-sm">4.5 out of 5</span><span
              className="text-green-500">★</span><span className="text-sm font-medium">Trustpilot</span></div>
          </div>
        </a></div>
        <div className="container max-w-screen-xl mx-auto px-4 2xl:px-0">
          <nav aria-label="Top">
            <div className="border-b border-gray-200">
              <div className="flex items-center justify-between h-16">
                <NextLink href="/">
                  <a>
                    <svg id="logo" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 124 25"
                         data-testid="logo" className="text-zz-blue-500 h-6"><title>Zizoo</title>
                      <path
                        d="M52 23.819v-3.405l9.14-14.463h-8.748V2.184h13.679v3.34L56.9 20.052h9.17v3.768H52zm16.545 0V2.183h4.179V23.82h-4.179zm6.453 0v-3.405l9.139-14.463h-8.75V2.184h13.68v3.34l-9.171 14.527h9.172v3.768H74.997zm29.342-2.19C102.837 23.15 101.002 24 98.567 24c-2.435 0-4.298-.852-5.802-2.37-2.166-2.187-2.106-4.89-2.106-8.628 0-3.74-.06-6.442 2.106-8.63C94.268 2.85 96.132 2 98.567 2c2.435 0 4.27.852 5.772 2.371 2.164 2.19 2.135 4.891 2.135 8.63 0 3.738.03 6.442-2.135 8.63v-.002zm-3.097-14.704c-.601-.698-1.534-1.156-2.676-1.156-1.142 0-2.104.457-2.707 1.155-.81.912-1.02 1.912-1.02 6.075s.21 5.165 1.02 6.076c.603.698 1.565 1.154 2.707 1.154s2.075-.456 2.677-1.153c.812-.912 1.053-1.913 1.053-6.076 0-4.164-.24-5.166-1.053-6.078l-.001.003zm20.624 14.705c-1.503 1.518-3.336 2.37-5.772 2.37-2.436 0-4.3-.852-5.804-2.37-2.165-2.187-2.107-4.89-2.107-8.628 0-3.74-.058-6.442 2.107-8.63C111.794 2.85 113.658 2 116.093 2c2.437 0 4.271.852 5.772 2.371 2.165 2.19 2.135 4.891 2.135 8.63 0 3.738.03 6.442-2.135 8.63h.002zm-3.098-14.705c-.6-.698-1.53-1.156-2.675-1.156-1.141 0-2.105.457-2.705 1.155-.813.912-1.023 1.912-1.023 6.075s.21 5.165 1.023 6.076c.6.698 1.562 1.154 2.703 1.154 1.145 0 2.076-.456 2.675-1.153.814-.912 1.055-1.913 1.055-6.076 0-4.164-.24-5.166-1.055-6.078h.002v.003zM27.49 14.89l8.574 8.584L34.542 25h-.001l-8.574-8.584L17.395 25l-1.525-1.526 8.574-8.584L11.096 1.526 12.618 0l13.35 13.365L39.316.002l1.522 1.523L27.49 14.89zM42.362 3.051l-9.64 9.65 9.64 9.653L52 12.702l-9.64-9.653h.001v.002zm-.722 15.177l-4.796-4.387h4.797v4.387h-.001zm0-6.441h-4.797l4.796-4.61v4.61zm1.64-4.61l4.602 4.61h-4.603v-4.61zm0 11.05v-4.386h4.602l-4.603 4.387zm-25.14-6.44h-.001l1.093 1.139-9.622 9.427L0 12.703 9.697 3.05l1.196 1.078v7.658h7.246zm-8.56 7.402v.002l5.596-5.35H8.757V7.225l-5.604 5.423 6.425 6.542z"></path>
                    </svg>
                  </a>
                </NextLink>
                <div className="flex items-center justify-end flex-1">
                  <div className="relative">
                    <button type="button" id="currency-locale-menu-button" aria-expanded="false" aria-haspopup="true"
                            className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <span className="sr-only">Open menu</span>
                      <div className="flex items-center text-gray-700 hover:text-gray-800"><span
                        className="inline-flex items-center flex-shrink-0 block w-5 h-auto"><img
                        src="https://cdn.zizoo.com/media/images/flags/round/en.svg" width="20" height="20"
                        className="w-full h-auto"/></span>
                        <div className="block ml-2 text-sm font-medium">GBP</div>
                        <span className="sr-only">change currency or locale</span></div>
                    </button>
                  </div>
                  <div className="relative ml-4">
                    <button type="button" id="user-menu-button" aria-expanded="false" aria-haspopup="true"
                            className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <span className="sr-only">Open menu</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                           stroke="currentColor" aria-hidden="true" className="w-auto h-6 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
