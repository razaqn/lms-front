export default function WhatLearn() {
  return (
    <>
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[454px] bg-orange-500 flex items-center justify-center overflow-hidden">
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

        {/* Teks di tengah - Responsif */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white text-center mb-4 sm:mb-6 lg:mb-8">Apa yang ingin anda pelajari?</h1>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-8">
            <div className="rounded-xs w-15 h-15 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-45 lg:h-45 bg-neutral-50 transition-transform duration-300 hover:scale-105 m-auto"></div>
            <div className="rounded-xs w-15 h-15 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-45 lg:h-45 bg-neutral-50 transition-transform duration-300 hover:scale-105 m-auto"></div>
            <div className="rounded-xs w-15 h-15 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-45 lg:h-45 bg-neutral-50 transition-transform duration-300 hover:scale-105 m-auto"></div>
            <div className="rounded-xs w-15 h-15 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-45 lg:h-45 bg-neutral-50 transition-transform duration-300 hover:scale-105 m-auto"></div>
          </div>
        </div>
      </div>
    </>
  );
}
