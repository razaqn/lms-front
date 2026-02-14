import { useState } from "react";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import CourseCard from "@/components/course/CourseCard";
import PaginationComponent from "@/components/common/PaginationComponent";

export default function SearchPage() {
  // State untuk pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalResults = 18; // Total hasil pencarian
  const itemsPerPage = 5; // Jumlah item per halaman
  const totalPages = Math.ceil(totalResults / itemsPerPage);

  // Handler untuk perubahan halaman
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Di sini Anda bisa menambahkan logic untuk fetch data berdasarkan halaman
    console.log(`Pindah ke halaman: ${page}`);
  };

  // Simulasi data berdasarkan halaman saat ini
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalResults);
    return Array.from({ length: endIndex - startIndex }, (_, index) => startIndex + index);
  };

  const currentItems = getCurrentPageItems();

  return (
    <>
      <Navbar />
      <div className="w-full mt-15 py-4 px-7">
        {/* title */}
        <h1 className="text-neutral-900 font-bold text-2xl">
          {totalResults} Hasil untuk "Photoshop"
        </h1>
        <hr className="border-t-2 border-neutral-300 my-4" />
        
        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
          {currentItems.map((item, index) => (
            <CourseCard key={`course-${currentPage}-${index}`} />
          ))}
        </div>
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center py-8">
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          maxVisiblePages={5}
        />
      </div>

      <Footer />
    </>
  );
}
