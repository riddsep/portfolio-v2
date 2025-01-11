function About() {
  return (
    <div className="bg-dust">
      <div className="flex flex-col gap-5 px-5 py-10 text-white sm:px-10 md:flex-row md:py-16 lg:mx-auto lg:max-w-6xl xl:px-0">
        <div className="max-w-[300px] lg:max-w-[600px]">
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
            <span className="highlight font-semibold">Let’s connect </span> if
            you’re interested in collaborating or discussing web development!
          </p>
        </div>
        <div className="relative mx-auto max-w-96 after:absolute after:-left-52 after:bottom-14 after:hidden after:content-[url('/arrow-2.svg')] lg:after:inline-block">
          <div className="relative before:absolute before:-right-32 before:top-4 before:hidden before:-rotate-12 before:content-[url('/arrow.svg')] lg:before:inline-block">
            <img src="/aboutme.png" alt="" className="mx-auto w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
