import React from "react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const PaginationComponent = ({ currentPage = 1, totalPages = 1, onPageChange, showPreviousNext = true, maxVisiblePages = 5, className = "" }) => {
  // Jika hanya 1 halaman, tidak perlu tampilkan pagination
  if (totalPages <= 1) return null;

  // Fungsi untuk generate array halaman yang akan ditampilkan
  const getVisiblePages = () => {
    const pages = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, currentPage + halfVisible);

    // Adjust jika tidak cukup halaman di satu sisi
    if (endPage - startPage + 1 < maxVisiblePages) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      } else {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();
  const showStartEllipsis = visiblePages[0] > 2;
  const showEndEllipsis = visiblePages[visiblePages.length - 1] < totalPages - 1;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <Pagination className={className}>
      <PaginationContent>
        {/* Previous Button */}
        {showPreviousNext && currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} className="cursor-pointer me-3" />
          </PaginationItem>
        )}

        {/* First Page - hanya tampilkan jika tidak termasuk dalam visiblePages */}
        {visiblePages[0] > 1 && (
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(1)} isActive={currentPage === 1} className="cursor-pointer">
              1
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Start Ellipsis */}
        {showStartEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Visible Pages */}
        {visiblePages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink onClick={() => handlePageChange(page)} isActive={currentPage === page} className="cursor-pointer">
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* End Ellipsis */}
        {showEndEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Last Page - hanya tampilkan jika tidak termasuk dalam visiblePages */}
        {visiblePages[visiblePages.length - 1] < totalPages && (
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(totalPages)} isActive={currentPage === totalPages} className="cursor-pointer">
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Next Button */}
        {showPreviousNext && currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext onClick={() => handlePageChange(currentPage + 1)} className="cursor-pointer" />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
