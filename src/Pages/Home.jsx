const Home = () => {
  return (
    <section className="bg-white lg:grid mt-24 lg:h-screen lg:place-content-center">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
        <div className="max-w-prose  text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl">
            <strong className="text-indigo-600">Aqua Tech</strong> <br />
            Pure Water, Healthy Life
          </h1>

          <p className="mt-4 text-base text-gray-700 sm:text-lg">
            Trusted Experts in RO Water Purifier Sales, Installation & Repair
            Services
          </p>

          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              className="inline-block rounded border border-indigo-600  px-5 py-3 font-medium text-white bg-indigo-600 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
              href="tel:+919360247426"
            >
              Book a Service
            </a>

            <a
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-10 md:mt-0 flex justify-center">
          <img
            src="/Family.webp"
            alt="Family"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
