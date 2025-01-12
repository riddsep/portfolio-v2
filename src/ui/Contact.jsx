import { HiArrowUpRight } from "react-icons/hi2";

function Contact() {
  return (
    <div className="bg-dust px-5 py-10">
      <div className="rounded-2xl border px-5 py-10 text-white shadow-2xl backdrop-blur-sm sm:px-10 lg:mx-auto lg:max-w-6xl">
        <div className="flex items-center justify-between">
          <h1 className="[writing-mode:vertical-lr] md:[writing-mode:horizontal-tb]">
            RIDO SEPTIAWAN
          </h1>
          <ul className="flex flex-col items-center gap-5 md:flex-row">
            <li className="nav-item flex items-center gap-3">
              LINKEDIN <HiArrowUpRight />
            </li>
            <li className="nav-item flex items-center gap-3">
              GITHUB <HiArrowUpRight />
            </li>
            <li className="nav-item flex items-center gap-3">
              TIKTOK <HiArrowUpRight />
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center py-16 lg:py-28">
          <h1 className="mb-4 text-center text-4xl md:text-6xl lg:text-8xl">
            Interested in working together?
          </h1>
          <img src="/spiderman.png" alt="" className="lg:w-[300px]" />
        </div>
        <div>
          <p>©2024 – All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
