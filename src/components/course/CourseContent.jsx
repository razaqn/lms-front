import { FaCheckCircle, FaLaptop, FaDownload } from "react-icons/fa";
import headphonesImage from "@/assets/headphones.jpg";
import { Clock, BookOpen, ShoppingCart } from "lucide-react";

export default function CourseContent() {
  const learningTopics = ["design icon", "membuat logo", "design banner", "Photoshop Tools", "Typography", "design grafis"];

  const requirements = ["Laptop dengan ram 8 GB", "Software photoshop"];

  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 space-y-6 sm:space-y-8">
      {/* Apa yang akan dipelajari */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Apa yang akan dipelajari?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {learningTopics.map((topic, index) => (
            <div key={index} className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500 text-sm flex-shrink-0" />
              <span className="text-gray-700 text-sm">{topic}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Persyaratan kursus */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Persyaratan kursus</h2>

        <div className="space-y-3">
          {requirements.map((requirement, index) => (
            <div key={index} className="flex items-center gap-3">
              {index === 0 ? <FaLaptop className="text-blue-500 text-sm flex-shrink-0" /> : <FaDownload className="text-purple-500 text-sm flex-shrink-0" />}
              <span className="text-gray-700 text-sm">{requirement}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Ulasan */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-6">Ulasan</h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
          {/* Review 1 */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">
                  ★
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-700 mb-3">Kursus yang membuat saya memiliki skill dengan yang baik, dengan materi yang benar-benar mengajarkan saya dari benar-benar pemula hingga mahir. Sangat recommend!</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">RM</div>
              <div>
                <p className="text-sm font-semibold">Regitha Millas</p>
                <p className="text-xs text-gray-500">Graphic Artist</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">
                  ★
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-700 mb-3">Kursus yang membuat saya memiliki skill dengan yang baik, dengan materi yang benar-benar mengajarkan saya dari benar-benar pemula hingga mahir. Sangat recommend!</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">RM</div>
              <div>
                <p className="text-sm font-semibold">Regitha Millas</p>
                <p className="text-xs text-gray-500">Graphic Artist</p>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">
                  ★
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-700 mb-3">Kursus yang membuat saya memiliki skill dengan yang baik, dengan materi yang benar-benar mengajarkan saya dari benar-benar pemula hingga mahir. Sangat recommend!</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">RM</div>
              <div>
                <p className="text-sm font-semibold">Regitha Millas</p>
                <p className="text-xs text-gray-500">Graphic Artist</p>
              </div>
            </div>
          </div>

          {/* Review 4 */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">
                  ★
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-700 mb-3">Kursus yang membuat saya memiliki skill dengan yang baik, dengan materi yang benar-benar mengajarkan saya dari benar-benar pemula hingga mahir. Sangat recommend!</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">RM</div>
              <div>
                <p className="text-sm font-semibold">Regitha Millas</p>
                <p className="text-xs text-gray-500">Graphic Artist</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kursus serupa */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-6">Kursus serupa</h2>

        <div className="space-y-4">
          {/* Courses */}
          <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 hover:shadow-md transition-shadow">
            <div className="flex-1 bg-yellow-400 flex items-center justify-center flex-shrink-0">
              <img src={headphonesImage} alt="Course" className="object-cover" />
            </div>
            <div className="flex-3">
              <h3 className="font-semibold text-gray-800 mb-1">Adobe after effect for beginners</h3>
              <p className="text-sm text-gray-600 mb-2">Graphic Design</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span>4.9</span>
                  <span>(1k Siswa)</span>
                </div>
                <span>📥 15 Siswa</span>
              </div>
              {/* Duration and Lessons */}
              <div className="flex items-center justify-start gap-4 text-xs text-gray-500 pt-1">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-orange-500 flex-shrink-0" />
                  <span className="truncate">12</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-3 h-3 text-blue-500 flex-shrink-0" />
                  <span className="truncate">15 Lessons</span>
                </div>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <div className="text-lg font-bold text-orange-500">Rp150.000</div>
              <div className="text-sm text-gray-400 line-through">Rp250.000</div>
              <button className="p-3 mt-2 rounded-full border-4 border-orange-500 text-orange-500 rounded hover:bg-orange-50">
                <ShoppingCart className="w-20 h-20 text-neutral-800" />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 hover:shadow-md transition-shadow">
            <div className="flex-1 bg-yellow-400 flex items-center justify-center flex-shrink-0">
              <img src={headphonesImage} alt="Course" className="object-cover" />
            </div>
            <div className="flex-3">
              <h3 className="font-semibold text-gray-800 mb-1">Adobe after effect for beginners</h3>
              <p className="text-sm text-gray-600 mb-2">Graphic Design</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span>4.9</span>
                  <span>(1k Siswa)</span>
                </div>
                <span>📥 15 Siswa</span>
              </div>
              {/* Duration and Lessons */}
              <div className="flex items-center justify-start gap-4 text-xs text-gray-500 pt-1">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-orange-500 flex-shrink-0" />
                  <span className="truncate">12</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-3 h-3 text-blue-500 flex-shrink-0" />
                  <span className="truncate">15 Lessons</span>
                </div>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <div className="text-lg font-bold text-orange-500">Rp150.000</div>
              <div className="text-sm text-gray-400 line-through">Rp250.000</div>
              <button className="p-3 mt-2 rounded-full border-4 border-orange-500 text-orange-500 rounded hover:bg-orange-50">
                <ShoppingCart className="w-20 h-20 text-neutral-800" />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 hover:shadow-md transition-shadow">
            <div className="flex-1 bg-yellow-400  flex items-center justify-center flex-shrink-0">
              <img src={headphonesImage} alt="Course" className="object-cover" />
            </div>
            <div className="flex-3">
              <h3 className="font-semibold text-gray-800 mb-1">Adobe after effect for beginners</h3>
              <p className="text-sm text-gray-600 mb-2">Graphic Design</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span>4.9</span>
                  <span>(1k Siswa)</span>
                </div>
                <span>📥 15 Siswa</span>
              </div>
              {/* Duration and Lessons */}
              <div className="flex items-center justify-start gap-4 text-xs text-gray-500 pt-1">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-orange-500 flex-shrink-0" />
                  <span className="truncate">12</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-3 h-3 text-blue-500 flex-shrink-0" />
                  <span className="truncate">15 Lessons</span>
                </div>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <div className="text-lg font-bold text-orange-500">Rp150.000</div>
              <div className="text-sm text-gray-400 line-through">Rp250.000</div>
              <button className="p-3 mt-2 rounded-full border-4 border-orange-500 text-orange-500 rounded hover:bg-orange-50">
                <ShoppingCart className="w-20 h-20 text-neutral-800" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
