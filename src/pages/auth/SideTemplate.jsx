export default function SideTemplate({ children }) {
  return (
    <>
      <div className="relative mt-2 min-h-screen w-full flex justify-center items-center bg-gray-50 overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* SVG Background - Hidden on mobile, visible on larger screens */}
        <svg className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[300px] lg:w-[500px] pointer-events-none" viewBox="0 0 586 638" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M180.552 38.4513C222.752 8.93106 281.462 -10.66 329.495 8.15229C379.224 27.629 378.597 106.149 424.235 133.891C464.895 158.608 529.465 117.218 563.538 150.421C595.444 181.513 584.992 237.695 575.294 281.095C566.657 319.75 536.449 348.035 512.357 379.468C492.045 405.97 462.226 422.669 444.909 451.216C409.43 509.705 421.791 607.753 358.313 633.413C304.389 655.21 244.583 593.167 210.519 545.965C179.561 503.068 218.937 432.342 184.326 392.324C139.892 340.948 26.4747 370.211 3.32534 306.4C-16.4938 251.769 70.5259 215.324 102.55 166.908C130.665 124.401 138.774 67.6763 180.552 38.4513Z"
            fill="#FD6F00"
          />
        </svg>
        <svg className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-[300px] lg:w-[500px] pointer-events-none" viewBox="0 0 550 578" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M542.217 170.342C562.132 194.762 533.653 233.033 524.486 263.766C517.093 288.55 503.065 310.376 493.281 334.398C484.331 356.373 470.445 377.076 468.789 400.517C465.273 450.305 525.513 529.518 478.187 548.12C424.657 569.16 400.52 443.091 343.677 449.693C293.626 455.506 304.842 552.249 258.878 573.592C226.013 588.852 188.988 555.738 160.713 534.649C133.112 514.063 122.467 478.3 98.3368 453.851C71.2974 426.454 25.1953 416.496 9.4536 381.387C-5.92394 347.09 1.4757 304.382 15.2893 268.627C28.7295 233.839 53.3547 200.498 86.3668 182.307C120.113 163.711 177.522 198.796 199.312 167.222C229.623 123.3 169.691 51.7927 204.47 11.1718C229.264 -17.7877 278.806 20.8185 314.258 32.9673C343.988 43.1552 374.323 54.8785 396.288 76.9042C416.812 97.4851 410.482 138.365 435.054 154.098C465.376 173.513 519.57 142.57 542.217 170.342Z"
            fill="#FD6F00"
          />
        </svg>

        {/* Mobile decorative elements - smaller and positioned differently */}
        <div className="md:hidden absolute top-10 left-4 w-16 h-16 bg-orange-500 rounded-full opacity-20"></div>
        <div className="md:hidden absolute bottom-20 right-6 w-12 h-12 bg-orange-400 rounded-full opacity-30"></div>
        <div className="md:hidden absolute top-1/3 right-8 w-8 h-8 bg-orange-300 rounded-full opacity-25"></div>

        {children}
      </div>
    </>
  );
}
