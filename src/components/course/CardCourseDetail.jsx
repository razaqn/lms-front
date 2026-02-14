import { FaClock, FaCertificate, FaGlobe, FaShoppingCart } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

export default function CardCourseDetail() {
  return (
    <div className="hidden lg:block absolute w-[300px] bg-white p-6 shadow-xl z-20 -bottom-70 right-8">
      {/* Title */}
      <div className="mb-4">
        <h1 className="text-lg text-neutral-800 font-bold leading-tight">Ultimate Adobe Photoshop Training: From Beginner to Pro</h1>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-orange-500">Rp150.000</span>
          <span className="text-sm text-gray-400 line-through">Rp250.000</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">Diskon 20%</p>
      </div>

      {/* Course Features */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <FaClock className="text-gray-400" />
          <span>38 Jam pembelajaran</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <FaCertificate className="text-gray-400" />
          <span>Sertifikat penyelesaian</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <RiCustomerService2Fill className="text-gray-400" />
          <span>Konsultasi ahli</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <FaGlobe className="text-gray-400" />
          <span>Bahasa Indonesia</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-3">
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors">Beli Kursus Ini</button>

        <button className="w-full border border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
          <FaShoppingCart />
        </button>
      </div>

      {/* Additional Info */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          Bila anda sudah menyelesaikan kursus ini, anda dapat melakukan sertifikasi BNSP dengan <span className="text-orange-500 font-semibold">tambahan biaya</span>
        </p>
      </div>

      {/* Bottom Link */}
      <div className="mt-3 text-center">
        <a href="#" className="text-sm text-orange-500 hover:text-orange-600 flex items-center justify-center gap-1">
          <span>🔥</span>
          <span>Bagikan kursus ini</span>
        </a>
      </div>
    </div>
  );
}
