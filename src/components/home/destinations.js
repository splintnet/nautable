import style from './services.module.css'
import destinations from '../../data/top-destinations'

export default function TopDestinations() {
  const classMap = [
    'lg:row-span-3 lg:col-span-2',
    '',
    'lg:row-span-2',
    '',
    '',
    'lg:row-span-2',
    'lg:col-span-2',
  ]
  const a = destinations.slice(0, 7)
  return (
    <section className="pt-4 pb-8">
      <div className="container max-w-screen-xl mx-auto px-4 2xl:px-0 flex flex-col space-y-4 text-white">
        <header><h2 className="text-xl font-semibold text-gray-700 lg:text-3xl">Top Destinations</h2></header>
        <ul
          className="grid grid-flow-col lg:grid-flow-row grid-rows-1 lg:grid-rows-3 lg:grid-cols-5 gap-4 lg:gap-1 overflow-y-hidden overflow-x-auto lg:overflow-hidden rounded-md lg:h-[500px]">
          {a.map((item, k) =>
            (
              <li
                key={k}
                className={classMap[k] + " w-hp-gallery-item h-hp-gallery-item lg:w-full lg:h-full text-left overflow-hidden rounded-md lg:rounded-none"}>
                <a style={{backgroundImage: 'url(' + item.image + ')'}}
                   className="relative flex flex-col items-center justify-end h-full duration-500 ease-in-out overlay-2 transition-spacing group hover:text-white"
                   href={item.href}>
                  <div
                    className={style.imageWrapper}>
                    <img alt="Yacht Charter Bahamas"
                         src="https://cdn.zizoo.com/media/images/top-destinations/bahamas-lg.jpg" decoding="async"
                         data-nimg="fill"
                         className="object-cover w-full h-full"/></div>
                  <div
                    className="absolute z-20 inset-x-6 transition-all duration-500 ease-in-out text-center lg:text-left bottom-4 group-hover:bottom-12 group-focus:bottom-12 lg:bottom-8 lg:group-hover:bottom-10 lg:group-focus:bottom-10">
                    <span className="text-lg lg:text-xl">{item.name}</span><br/><span
                    className="text-sm font-hairline">{item.subtext}</span>
                  </div>
                </a></li>
            )
          )}
        </ul>
      </div>
    </section>
  )
}
