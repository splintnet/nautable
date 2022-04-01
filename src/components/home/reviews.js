import Image from 'next/image'

export default function Reviews({reviews}) {
  return (
    <section className="pt-4 pb-8 mb-28">
      <div className="container max-w-screen-xl mx-auto px-4 2xl:px-0 flex flex-col">
        <header>
          <h2 className="text-xl font-semibold text-gray-700 lg:text-3xl">What people experienced with Zizoo</h2>
        </header>
        <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3 top-20">
          {reviews.map((item, k) => (
            <div
              key={k}
              className={(k > 0 ? 'hidden' : '') + " mx-auto bg-gray-100 flex lg:flex flex-col items-center text-center px-8 pb-8 rounded-md space-y-4 max-w-md"}>
              <div className="-mt-12">
                <Image alt={item.name}
                       height={150}
                       width={150}
                       src="https://cdn.zizoo.com/media/images/testimonials/testimonial-1.jpg"
                       className="rounded-full"/>
              </div>
              <blockquote className="flex flex-col space-y-4 text-sm italic">
                <p>{item.subject}</p>
                <p>{item.comment}</p>
                <cite className="text-base">{item.name}</cite>
              </blockquote>
              <div className="inline-flex items-center w-8 h-6 mt-4">
                <Image
                  width={30}
                  height={20}
                  src="https://cdn.zizoo.com/media/images/flags/square/au.svg" className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
