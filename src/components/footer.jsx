import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaVimeo, FaInstagram } from "react-icons/fa6";
import suviImg from "../assets/suvi.png";

export default function Footer() {
  return (
    <div className="w-full bg-neutral-50 px-4 lg:px-30 py-6 lg:py-10 flex flex-col">
      <div className="flex flex-col lg:flex-row lg:justify-between border-b-1 border-neutral-400 py-4 px-2 lg:px-5 mb-4 gap-4 lg:gap-0">
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-10 text-sm lg:text-md text-neutral-600">
          <Link className="cursor-pointer hover:text-neutral-800 transition-colors">About Us</Link>
          <Link className="cursor-pointer hover:text-neutral-800 transition-colors">Course</Link>
          <Link className="cursor-pointer hover:text-neutral-800 transition-colors">Certification</Link>
          <Link className="cursor-pointer hover:text-neutral-800 transition-colors">Achivement</Link>
        </div>
        <div className="flex gap-6 lg:gap-7 justify-center text-xl lg:text-2xl">
          <FaFacebook className="cursor-pointer hover:text-blue-600 transition-colors" />
          <FaTwitter className="cursor-pointer hover:text-blue-400 transition-colors" />
          <FaVimeo className="cursor-pointer hover:text-blue-500 transition-colors" />
          <FaInstagram className="cursor-pointer hover:text-pink-500 transition-colors" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 lg:gap-0">
        <p className="text-neutral-600 text-xs lg:text-sm text-center lg:text-left">© 2025 Suvi Training. All rights reserved.</p>
        <img className="w-25 lg:w-25 mx-auto lg:mx-0" src={suviImg} alt="suvi image" />
        <div className="flex justify-center lg:flex-row gap-2 lg:gap-8 text-center lg:text-left">
          <p className="text-sm lg:text-base cursor-pointer hover:text-neutral-800 transition-colors">Term of Service</p>
          <p className="text-sm lg:text-base cursor-pointer hover:text-neutral-800 transition-colors">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
