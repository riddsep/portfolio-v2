function About() {
  return (
    <div className="bg-dust">
      <div className="flex flex-col gap-5 px-5 text-white sm:px-10 md:flex-row lg:mx-auto lg:max-w-6xl xl:px-0">
        <div className="max-w-[600px]">
          <h1 className="highlight mb-6 text-3xl font-bold sm:text-4xl md:text-5xl lg:mb-10 lg:text-6xl">
            About me
          </h1>
          <p className="mb-4 md:mb-6 md:text-xl">
            I am a bachelor&apos;s graduate in Informatics and an alumnus of an
            online frontend developer bootcamp. While pursuing my degree, I
            worked as an online driver and housekeeping staff. After a journey
            of self-discovery, I found my passion in frontend development.
            Currently, I am interning as a Frontend Developer at Yumas Nida
            Corp.
          </p>

          <p className="max-w-[450px] md:text-xl">
            Let’s connect if you’re interested in collaborating or discussing
            web development!
          </p>
        </div>
        <img
          src="/aboutme.png"
          alt=""
          className="mx-auto w-full max-w-96 lg:ml-auto"
        />
      </div>
    </div>
  );
}

export default About;
