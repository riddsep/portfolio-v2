import { HiArrowUpRight } from "react-icons/hi2";

function Contact() {
  return (
    <div className="bg-dust px-5 py-10">
      <div
        className="rounded-2xl border px-5 py-10 text-white shadow-2xl backdrop-blur-sm sm:px-10 lg:mx-auto lg:max-w-6xl"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <div className="flex items-center justify-between">
          <h1 className="[writing-mode:vertical-lr] md:[writing-mode:horizontal-tb]">
            RIDO SEPTIAWAN
          </h1>
          <ul className="flex flex-col items-center gap-5 md:flex-row">
            <a
              href="https://www.linkedin.com/in/ridoseptiawan"
              className="nav-item flex items-center gap-3"
              target="_blank"
            >
              LINKEDIN <HiArrowUpRight />
            </a>
            <a
              href="https://github.com/riddsep"
              className="nav-item flex items-center gap-3"
              target="_blank"
            >
              GITHUB <HiArrowUpRight />
            </a>
            <a
              href="https://www.tiktok.com/@spainwoss"
              className="nav-item flex items-center gap-3"
              target="_blank"
            >
              TIKTOK <HiArrowUpRight />
            </a>
          </ul>
        </div>
        <div className="flex flex-col items-center py-16 lg:py-16">
          <h1 className="mb-4 text-center text-4xl md:text-6xl lg:text-8xl">
            <span className="highlight">Interested</span> in working together?
          </h1>
        </div>
        <div>
          <p>©2024 – All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
