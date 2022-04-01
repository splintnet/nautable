import Image from 'next/image'
import {useEffect, useRef, useState} from "react";

export default function Tops() {
  const ref = useRef(null);
  const [siteWidth, setSiteWidth] = useState(480)
  const [maxWidth, setMaxWidth] = useState(380)
  const [currentOffset, setCurrentOffset] = useState(0)
  const [itemWidth, setItemWidth] = useState(150)

  useEffect(() => {
    if (ref.current) {
      let amount = ref.current.children.length

      setSiteWidth(ref.current.clientWidth)
      setMaxWidth(amount * ref.current.firstChild.clientWidth)
      setItemWidth(ref.current.firstChild.clientWidth + 10)
    }
  }, [ref.current]);

  const next = () => {
    if (currentOffset < maxWidth - siteWidth) {
      setCurrentOffset(currentOffset + itemWidth)
    }
  }

  const prev = () => {
    if (currentOffset > 0) {
      setCurrentOffset(currentOffset - itemWidth)
    }

  }

  return (
    <section className="pt-4 pb-8">
      <div
        className="container max-w-screen-xl mx-auto px-4 2xl:px-0 flex flex-col space-y-4 text-white lg:overflow-hidden">
        <header>
          <h2 className="text-xl font-semibold text-gray-700 lg:text-3xl">Top Cities and Islands</h2>
        </header>
        <ul
          ref={ref}
          style={{transform: 'translateX(' + -currentOffset + 'px)'}}
          className="grid grid-flow-col justify-items-start grid-rows-1 gap-4 overflow-y-hidden overflow-x-auto lg:overflow-visible transition-transform duration-500 ease-in-out">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <li
              key={i}
              className="overflow-hidden rounded-md h-slider-item w-slider-item lg:h-slider-item-lg lg:w-slider-item-lg">
              <a className="flex flex-col items-center justify-end text-lg text-center overlay-2 group h-full"
                 href="/en/l/athens/">
                <div
                  className="h-full w-full relative overflow-hidden"
                >

                  <Image alt="Yacht Charter Athens" src="https://cdn.zizoo.com/media/images/top-cities/en/athens.jpg"
                         layout="fill"/>

                </div>
                <div
                  className="absolute text-lg text-white transition-all duration-500 ease-in-out inset-x-6 bottom-4 z-20 group-hover:bottom-10 group-focus:bottom-10">Yacht
                  Charter Athens
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="items-center justify-end hidden w-full pt-10 pb-1 space-x-8 lg:flex pr-18 lg:visible">
          <button className="bg-transparent border-none appearance-none" onClick={prev}>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12"
                 className="text-gray-400 w-6 h-6">
              <path
                d="M5.962.482L1.218 5.226l-.431.431c-.026.026-.178.127-.178.178-.025.127.38.431.457.507.913.965 1.826 1.929 2.765 2.867.71.761 1.446 1.497 2.156 2.258.254.254-.152.66-.405.406C3.983 10.2 2.385 8.524.762 6.85.583 6.647.38 6.47.202 6.266c-.38-.43-.025-.786.254-1.09L3.222 2.41 5.556.076c.254-.254.66.152.406.406z"
                fill="currentColor"></path>
            </svg>
          </button>
          <button className="bg-transparent border-none appearance-none" onClick={next}>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 12"
                 className="text-blue-500 w-6 h-6">
              <path
                d="M.076.482L4.82 5.226l.431.431c.026.026.178.127.178.178.025.127-.38.431-.457.507-.913.965-1.826 1.929-2.765 2.867-.71.761-1.446 1.497-2.156 2.258-.254.254.152.66.406.406C2.055 10.2 3.653 8.524 5.277 6.85c.177-.203.38-.38.558-.584.38-.43.025-.786-.254-1.09L2.816 2.41.482.076C.228-.178-.178.228.076.482z"
                fill="currentColor"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
