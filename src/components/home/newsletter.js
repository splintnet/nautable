export default function Newsletter() {
  return (
    <div className="py-8 bg-blue-100">
      <div
        className="container max-w-screen-xl mx-auto px-4 2xl:px-0 flex flex-col space-y-8 text-center text-blue-500"
      >
        <span
          className="text-2xl font-semibold"
        >
          Subscribe to our newsletter to get a £50 voucher and all our best offers.
        </span>
        <form
          noValidate=""
          method="post"
          className="flex flex-col w-full mx-auto space-y-4 md:w-auto md:flex-row md:space-y-0 md:space-x-4"
        >
          <div className="flex flex-col space-y-1 text-left">
            <div className="flex flex-col items-start w-full space-y-2">
              <input
                id="field-email"
                name="email"
                type="email"
                className="w-full h-11 px-4 border border-transparent rounded bg-white text-base text-gray-700 lg:w-300"
                placeholder="Your e-mail address"
                arial-label="Your e-mail address"
              />
            </div>
          </div>
          <button
            className="border border-transparent rounded text-center appearance-none select-none bg-blue-500 text-white hover:text-white hover:bg-indigo-500 active:bg-indigo-500 text-base px-6 h-11 hover:text-blue-indigo-200"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
