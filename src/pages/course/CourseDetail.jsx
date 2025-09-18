import Navbar from "@/components/layout/navbar";
import { FaStar, FaClock, FaCertificate } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import CardCourseDetail from "@/components/course/CardCourseDetail";
import VideoPlayer from "@/components/course/VideoPlayer";
import CourseContent from "@/components/course/CourseContent";

export default function CourseDetail() {
  return (
    <>
      <Navbar />

      <div className="relative w-full bg-orange-500 flex items-start py-8">
        {/* SVG kiri atas - Responsif dengan ukuran yang disesuaikan */}
        <svg
          className="absolute left-0 top-0 w-[150px] h-[100px] sm:w-[250px] sm:h-[160px] md:w-[320px] md:h-[200px] lg:w-[394px] lg:h-[253px] pointer-events-none opacity-80"
          viewBox="0 0 394 253"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-6.10352e-05 216.521C80.0479 214.742 167.84 271.126 233.571 237.794C299.976 204.12 261.648 124.697 289.965 69.4788C315.399 19.882 382.404 -15.2592 390.331 -67.8883C399.295 -127.401 387.023 -192.219 336.493 -239.432C285.185 -287.371 201.257 -312.607 118.745 -321.642C41.8279 -330.063 -32.0281 -307.202 -105.099 -287.781C-173.787 -269.526 -240.024 -248.652 -293.263 -212.14C-350.723 -172.732 -398.882 -126.286 -421.037 -71.1049C-445.329 -10.6015 -456.836 55.7627 -424.274 114.167C-391.175 173.536 -326.408 228.243 -242.914 248.386C-163.197 267.617 -83.9351 218.387 -6.10352e-05 216.521Z"
            fill="#BF5F00"
          />
        </svg>

        {/* SVG kanan bawah - Responsif dengan ukuran yang disesuaikan */}
        <svg
          className="absolute right-0 bottom-0 w-[200px] h-[120px] sm:w-[350px] sm:h-[200px] md:w-[480px] md:h-[270px] lg:w-[623px] lg:h-[354px] pointer-events-none opacity-80"
          viewBox="0 0 623 354"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M623 756.732C751.654 779.106 878.587 843.523 1004.03 812.963C1133.3 781.471 1250.51 695.616 1274.93 597.914C1299.25 500.587 1163.6 423.275 1125.13 328.4C1094.17 252.013 1126.13 166.729 1072.06 97.5061C1011.93 20.5413 926.645 -58.897 807.873 -77.7218C689.884 -96.4228 587.136 -20.1079 470.31 2.13322C348.486 25.3258 186.682 -15.7656 107.567 55.6016C27.86 127.502 126.452 235.618 109.894 327.251C93.6359 417.225 -39.8911 501.795 12.037 584.284C63.9839 666.803 227.133 665.266 343.325 698.062C435.656 724.123 526.688 739.982 623 756.732Z"
            fill="#FF9E40"
          />
        </svg>

        {/* Jumbotron */}
        <div className="relative mt-20 z-10 px-4 sm:px-8 md:px-12 lg:px-20 w-full max-w-4xl">
          <p className="text-neutral-50 mb-3">
            Online Course <span className="text-neutral-900">/</span> Graphic Design <span className="text-neutral-900">/</span> Photoshop
          </p>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight">Ultimate Adobe Photoshop Training: From Beginner to Pro</h1>
          <p className="text-neutral-50 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">Master Adobe Photoshop CC without any previous knowledge with this easy-to-follow course</p>
          <div className="flex flex-col sm:flex-row justify-start gap-2 sm:gap-4">
            <div className="text-yellow-300 flex items-center gap-1">
              <FaStar />
              4.9
              <p className="text-neutral-50 font-semibold">(1200 reviews)</p>
            </div>
            <div className="text-neutral-50 flex items-center gap-2">
              <BsDownload />
              <p className=" font-semibold">15 Sales</p>
            </div>
          </div>
        </div>

        <CardCourseDetail />
      </div>

      {/* Mobile Course Detail Card */}
      <div className="lg:hidden bg-white mx-4 p-6 shadow-lg rounded-lg -mt-8 relative z-10">
        <div className="mb-4">
          <h2 className="text-lg text-neutral-800 font-bold leading-tight">Ultimate Adobe Photoshop Training: From Beginner to Pro</h2>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-orange-500">Rp150.000</span>
            <span className="text-sm text-gray-400 line-through">Rp250.000</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Diskon 20%</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FaClock className="text-gray-400" />
            <span>38 Jam</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCertificate className="text-gray-400" />
            <span>Sertifikat</span>
          </div>
        </div>

        <button className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
          Beli Sekarang
        </button>
      </div>

      {/* Course Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content - Video & Description */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            {/* Video Player */}
            <VideoPlayer title="Ultimate Adobe Photoshop Training: From Beginner to Pro" thumbnailUrl="/api/placeholder/800/450" />

            {/* Course Content */}
            <CourseContent />
          </div>
        </div>
      </div>
    </>
  );
}
