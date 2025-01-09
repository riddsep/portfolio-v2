import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="relative h-dvh w-full bg-gradient bg-cover bg-no-repeat text-white">
      <Navbar />
      <div className="relative z-20 w-full px-5">
        <h2 className="mb-5 text-3xl font-bold">rido septiawan.</h2>
        <h1 className="mb-5 text-6xl font-bold">
          a{" "}
          <span className="relative before:absolute before:-bottom-1 before:left-0 before:h-2 before:w-full before:-skew-y-1 before:bg-green-900">
            passionate
          </span>{" "}
          front-end developer
        </h1>
        <p className="mb-5 text-xl font-semibold">
          Creating exceptional web experiences and inspiring tech growth.
        </p>
        <p className="w-3/4 text-lg">
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
