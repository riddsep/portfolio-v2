import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="relative w-full bg-dust text-white after:absolute after:bottom-0 after:right-4 after:content-[url('/rocket.png')] md:pt-10">
      <Navbar />
      <div className="z-20 w-full max-w-[500px] overflow-hidden px-5 py-16 sm:px-10 md:max-w-none md:py-32 lg:mx-auto lg:max-w-6xl lg:pt-10 xl:px-0">
        <h2 className="mb-5 text-3xl font-semibold sm:text-4xl md:text-5xl">
          rido septiawan.
        </h2>
        <h1 className="mb-5 text-[58px] font-bold leading-none sm:text-7xl md:mb-0">
          a{" "}
          <span className="highlight">
            <span className="relative text-white">passionate</span>
          </span>{" "}
          frontend developer
        </h1>
        <p className="mb-5 w-3/4 text-xl font-semibold sm:w-[480px] sm:text-2xl md:mb-10 md:w-full md:text-7xl">
          creating exceptional web experiences and inspiring tech{" "}
          <span className="decoration-[#17CF97]/30 decoration-wavy underline-offset-4 md:underline">
            growth.
          </span>
        </p>
        <p className="w-3/4 text-lg font-light sm:w-[480px] sm:text-xl md:text-3xl">
          <span className="font-semibold">1+ year experience </span>
          building responsive interfaces with React.js and Tailwind CSS.
        </p>
      </div>
    </div>
  );
}

export default Hero;
