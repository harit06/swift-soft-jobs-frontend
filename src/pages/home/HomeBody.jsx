export default function HomeBody() {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center text-center gap-10 md:gap-20 lg:gap-30">
        <h1 className="text-4xl font-sans font-medium mt-10 md:mt-20 lg:mt-30 dark:text-white">
          We Help You <span className="text-teal-600 font-bold">Navigate</span>{" "}
          the{" "}
          <span className="text-teal-600 font-bold">
            Competitive Tech Job Market
          </span>
        </h1>
        <h1 className="text-2xl font-sans font-stretch-semi-condensed m-2 md:m-4">
          Get notified{" "}
          <span className="text-teal-600 font-bold">immediately</span> when new
          software engineering roles become available.
        </h1>
      </div>
    </>
  )
}
