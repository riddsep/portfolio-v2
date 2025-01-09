import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="relative h-dvh w-full bg-gradient bg-cover bg-center bg-no-repeat text-white">
      <Navbar />
      <div className="relative z-20 w-full max-w-[500px] overflow-hidden px-5 sm:px-10 md:max-w-none lg:mx-auto lg:max-w-6xl lg:px-0 lg:pt-10">
        <h2 className="mb-5 text-3xl font-semibold sm:text-4xl md:text-5xl">
          rido septiawan.
        </h2>
        <h1 className="mb-5 text-6xl font-bold sm:text-7xl md:mb-0">
          a{" "}
          <span className="relative before:absolute before:-bottom-1 before:left-0 before:h-2 before:w-full before:-skew-y-1 before:bg-green-800">
            passionate
          </span>{" "}
          frontend developer
        </h1>
        <p className="mb-5 w-3/4 text-xl font-semibold sm:w-[480px] sm:text-2xl md:mb-10 md:w-full md:text-7xl">
          creating exceptional web experiences and inspiring tech{" "}
          <span className="underline decoration-green-800 decoration-wavy underline-offset-4">
            growth.
          </span>
        </p>
        <p className="w-3/4 text-lg sm:w-[480px] sm:text-xl md:text-3xl">
          <span className="font-semibold text-green-100">
            1+ year experience{" "}
          </span>
          building responsive interfaces with React.js and Tailwind CSS.
        </p>
      </div>
    </div>
  );
}

export default Hero;
