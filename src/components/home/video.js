export default function Video() {
  return (
    <div className="py-10 bg-gray-100 md:py-16">
      <div
        className="container max-w-screen-xl mx-auto px-4 2xl:px-0 flex flex-col md:flex-row md:justify-center md:items-center md:space-x-8">
        <a href="https://www.youtube.com/watch?v=zIV8y6SAbq0" target="_blank" rel="noreferrer noopener"
           className="relative block md:w-3/6">
          <div>
            <img alt="The Zizoo experience" src="https://img.youtube.com/vi/zIV8y6SAbq0/mqdefault.jpg"

                 className="aspect-video w-full bg-gray-100"/>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 -77 512 512" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 ">
              <path
                d="M501.453 56.094c-5.902-21.934-23.195-39.223-45.125-45.13C416.262 0 255.996 0 255.996 0S95.734 0 55.668 10.547C34.16 16.449 16.445 34.164 10.543 56.094 0 96.156 0 179.242 0 179.242s0 83.504 10.543 123.149c5.906 21.93 23.195 39.222 45.129 45.129C96.156 358.484 256 358.484 256 358.484s160.262 0 200.328-10.546c21.934-5.903 39.223-23.196 45.129-45.125C512 262.745 512 179.663 512 179.663s.422-83.508-10.547-123.57zm0 0"
                fill="red"></path>
              <path d="M204.969 256l133.27-76.758-133.27-76.758zm0 0" fill="#fff"></path>
            </svg>
          </div>
        </a>
        <div
          className="flex flex-col items-center pt-8 space-y-8 text-center md:pt-0 md:items-start md:text-left md:w-3/6">
          <h1 className="text-3xl font-semibold capitalize">The Zizoo experience</h1><p className="md:text-xl">Sit back
          and
          relax while we take care of building your dream experience at sea.</p><a
          href="https://www.zizoo.com/en/zizoo-yacht-charter-services"
          className="block py-3 text-lg font-semibold bg-white border-2 border-solid rounded text-zz-blue-500 border-zz-blue-500 px-14">Explore
          more</a></div>
      </div>
    </div>
  )
}
