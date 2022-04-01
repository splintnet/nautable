import style from './services.module.css'

export default function TopDestinations() {
  return (
    <section className="pt-4 pb-8">
      <div className="container max-w-screen-xl mx-auto px-4 2xl:px-0 flex flex-col space-y-4 text-white">
        <header><h2 className="text-xl font-semibold text-gray-700 lg:text-3xl">Top Destinations</h2></header>
        <ul
          className="grid grid-flow-col lg:grid-flow-row grid-rows-1 lg:grid-rows-3 lg:grid-cols-5 gap-4 lg:gap-1 overflow-y-hidden overflow-x-auto lg:overflow-hidden rounded-md lg:h-[500px]">
          <li
            className="lg:row-span-3 lg:col-span-2 w-hp-gallery-item h-hp-gallery-item lg:w-full lg:h-full text-left overflow-hidden rounded-md lg:rounded-none">
            <a style={{backgroundImage: 'url(https://cdn.zizoo.com/media/images/top-destinations/bahamas-lg.jpg)'}}
               className="relative flex flex-col items-center justify-end h-full duration-500 ease-in-out overlay-2 transition-spacing group hover:text-white"
               href="/en/c/bahamas/">
              <div
                className={style.imageWrapper}>
                <img alt="Yacht Charter Bahamas"
                     src="https://cdn.zizoo.com/media/images/top-destinations/bahamas-lg.jpg" decoding="async"
                     data-nimg="fill"
                     className="object-cover w-full h-full"/></div>
              <div
                className="absolute inset-x-6 z-20 transition-all duration-500 ease-in-out text-center lg:text-left bottom-6 group-hover:bottom-12 group-focus:bottom-12 lg:bottom-14 lg:group-hover:bottom-20 lg:group-focus:bottom-20">
                <span className="text-lg lg:text-2xl">Yacht Charter Bahamas</span><br/><span
                className="text-sm font-hairline">Starting from £233/day</span>
              </div>
            </a></li>
          <li
            className="w-hp-gallery-item h-hp-gallery-item lg:w-full lg:h-full text-left overflow-hidden rounded-md lg:rounded-none">
            <a style={{backgroundImage: 'url(https://cdn.zizoo.com/media/images/top-destinations/puerto-rico.jpg)'}}
               className="relative flex flex-col items-center justify-end h-full duration-500 ease-in-out overlay-2 transition-spacing group hover:text-white"
               href="/en/g/caribbean/">
              <div
                className={style.imageWrapper}>
                <img alt="Yacht Charter Caribbean"
                     src="https://cdn.zizoo.com/media/images/top-destinations/puerto-rico.jpg" decoding="async"
                     data-nimg="fill"
                     className="object-cover w-full h-full"/>
                <noscript></noscript>
              </div>
              <div
                className="absolute z-20 inset-x-6 transition-all duration-500 ease-in-out text-center bottom-6 group-hover:bottom-12 group-focus:bottom-12">
                <span className="text-lg">Yacht Charter Caribbean</span><br/><span className="text-sm font-hairline">Starting from £199/day</span>
              </div>
            </a></li>
          <li
            className="lg:row-span-2 w-hp-gallery-item h-hp-gallery-item lg:w-full lg:h-full text-left overflow-hidden rounded-md lg:rounded-none">
            <a style={{backgroundImage: 'url(https://cdn.zizoo.com/media/images/top-destinations/greece.jpg)'}}
               className="relative flex flex-col items-center justify-end h-full duration-500 ease-in-out overlay-2 transition-spacing group hover:text-white"
               href="/en/c/greece/">
              <div
                className={style.imageWrapper}>
                <img alt="Yacht Charter Greece" src="https://cdn.zizoo.com/media/images/top-destinations/greece.jpg"
                     decoding="async" data-nimg="fill"
                     className="object-cover w-full h-full"/>
                <noscript></noscript>
              </div>
              <div
                className="absolute z-20 inset-x-6 transition-all duration-500 ease-in-out text-center bottom-6 group-hover:bottom-12 group-focus:bottom-12">
                <span className="text-lg">Yacht Charter Greece</span><br/><span className="text-sm font-hairline">Starting from £80/day</span>
              </div>
            </a></li>
          <li
            className="w-hp-gallery-item h-hp-gallery-item lg:w-full lg:h-full text-left overflow-hidden rounded-md lg:rounded-none">
            <a style={{backgroundImage: 'url(https://cdn.zizoo.com/media/images/top-destinations/croatia.jpg)'}}
               className="relative flex flex-col items-center justify-end h-full duration-500 ease-in-out overlay-2 transition-spacing group hover:text-white"
               href="/en/c/croatia/">
              <div
                className={style.imageWrapper}>
                <img alt="Yacht Charter Croatia" src="https://cdn.zizoo.com/media/images/top-destinations/croatia.jpg"
                     decoding="async" data-nimg="fill"
                     className="object-cover w-full h-full"/>
                <noscript></noscript>
              </div>
              <div
                className="absolute z-20 inset-x-6 transition-all duration-500 ease-in-out text-center bottom-6 group-hover:bottom-12 group-focus:bottom-12">
                <span className="text-lg">Yacht Charter Croatia</span><br/><span className="text-sm font-hairline">Starting from £42/day</span>
              </div>
            </a></li>
          <li
            className="w-hp-gallery-item h-hp-gallery-item lg:w-full lg:h-full text-left overflow-hidden rounded-md lg:rounded-none">
            <a
              style={{backgroundImage: 'url(https://cdn.zizoo.com/media/images/top-destinations/british-virgin-islands.jpg)'}}
              className="relative flex flex-col items-center justify-end h-full duration-500 ease-in-out overlay-2 transition-spacing group hover:text-white"
              href="/en/c/virgin-islands-british/">
              <div
                className={style.imageWrapper}>
                <img alt="Yacht Charter British Virgin Islands"
                     src="https://cdn.zizoo.com/media/images/top-destinations/british-virgin-islands.jpg"
                     decoding="async" data-nimg="fill"
                     className="object-cover w-full h-full"/>
                <noscript></noscript>
              </div>
              <div
                className="absolute z-20 inset-x-6 transition-all duration-500 ease-in-out text-center bottom-6 group-hover:bottom-12 group-focus:bottom-12">
                <span className="text-lg">Yacht Charter British Virgin Islands</span><br/><span
                className="text-sm font-hairline">Starting from £199/day</span></div>
            </a></li>
          <li
            className="lg:row-span-2 w-hp-gallery-item h-hp-gallery-item lg:w-full lg:h-full text-left overflow-hidden rounded-md lg:rounded-none">
            <a style={{backgroundImage: 'url(https://cdn.zizoo.com/media/images/top-destinations/spain.jpg)'}}
               className="relative flex flex-col items-center justify-end h-full duration-500 ease-in-out overlay-2 transition-spacing group hover:text-white"
               href="/en/c/spain/">
              <div
                className={style.imageWrapper}>
                <img alt="Boat Rental Spain" src="https://cdn.zizoo.com/media/images/top-destinations/spain.jpg"
                     decoding="async" data-nimg="fill"
                     className="object-cover w-full h-full"/>
                <noscript></noscript>
              </div>
              <div
                className="absolute z-20 inset-x-6 transition-all duration-500 ease-in-out text-center bottom-6 group-hover:bottom-12 group-focus:bottom-12">
                <span className="text-lg">Boat Rental Spain</span><br/><span className="text-sm font-hairline">Starting from £93/day</span>
              </div>
            </a></li>
          <li
            className="w-hp-gallery-item h-hp-gallery-item lg:w-full lg:h-full text-left overflow-hidden rounded-md lg:rounded-none">
            <a style={{backgroundImage: 'url(https://cdn.zizoo.com/media/images/top-destinations/turkey.jpg)'}}
               className="relative flex flex-col items-center justify-end h-full duration-500 ease-in-out overlay-2 transition-spacing group hover:text-white"
               href="/en/c/turkey/">
              <div
                className={style.imageWrapper}>
                <img alt="Yacht Charter Turkey" src="https://cdn.zizoo.com/media/images/top-destinations/turkey.jpg"
                     decoding="async" data-nimg="fill"
                     className="object-cover w-full h-full"/>
                <noscript></noscript>
              </div>
              <div
                className="absolute z-20 inset-x-6 transition-all duration-500 ease-in-out text-center bottom-6 group-hover:bottom-12 group-focus:bottom-12">
                <span className="text-lg">Yacht Charter Turkey</span><br/><span className="text-sm font-hairline">Starting from £127/day</span>
              </div>
            </a></li>
          <li
            className="w-hp-gallery-item h-hp-gallery-item lg:w-full lg:h-full text-left overflow-hidden rounded-md lg:rounded-none">
            <a style={{backgroundImage: 'url(https://cdn.zizoo.com/media/images/top-destinations/italy.jpg)'}}
               className="relative flex flex-col items-center justify-end h-full duration-500 ease-in-out overlay-2 transition-spacing group hover:text-white"
               href="/en/c/italy/">
              <div
                className={style.imageWrapper}>
                <img alt="Yacht Charter Italy" src="https://cdn.zizoo.com/media/images/top-destinations/italy.jpg"
                     decoding="async" data-nimg="fill"
                     className="object-cover w-full h-full"/>
                <noscript></noscript>
              </div>
              <div
                className="absolute z-20 inset-x-6 transition-all duration-500 ease-in-out text-center bottom-6 group-hover:bottom-12 group-focus:bottom-12">
                <span className="text-lg">Yacht Charter Italy</span><br/><span className="text-sm font-hairline">Starting from £55/day</span>
              </div>
            </a></li>
        </ul>
      </div>
    </section>
  )
}
