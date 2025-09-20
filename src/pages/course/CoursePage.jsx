import React, { useState } from "react";
import { courseData } from "../../data/courseData";
import CourseSidebar from "../../components/course/CourseSidebar";
import CourseVideoPlayer from "../../components/course/CourseVideoPlayer";
import CourseContent from "../../components/course/CourseContent";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

function CoursePage() {
  // State untuk lesson yang sedang aktif
  const [currentLesson, setCurrentLesson] = useState(courseData.sections[0]?.lessons[0] || null);

  // State untuk section yang sedang aktif
  const [currentSection, setCurrentSection] = useState(courseData.sections[0] || null);

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Function untuk handle perubahan lesson
  const handleLessonChange = (lesson, section) => {
    setCurrentLesson(lesson);
    setCurrentSection(section);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-18 bg-gray-50">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block w-sm bg-white shadow-lg min-h-screen">
            <CourseSidebar course={courseData} activeLesson={currentLesson} onLessonSelect={handleLessonChange} />
          </div>

          {/* Mobile Sidebar Toggle - Only visible on mobile */}
          <div className="lg:hidden bg-white shadow-sm border-b">
            <button onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} className="w-full p-4 text-left flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">{currentLesson?.title || "Pilih Lesson"}</h3>
                <p className="text-sm text-gray-500">{currentSection?.title}</p>
              </div>
              <svg className={`w-5 h-5 transform transition-transform ${mobileSidebarOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Mobile Sidebar Dropdown */}
            {mobileSidebarOpen && (
              <div className="border-t bg-white">
                <CourseSidebar
                  course={courseData}
                  activeLesson={currentLesson}
                  onLessonSelect={(lesson, section) => {
                    handleLessonChange(lesson, section);
                    setMobileSidebarOpen(false);
                  }}
                />
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 lg:p-6">
            {/* Video Player Area */}
            <div className="bg-white rounded-lg shadow-lg mb-6">
              <CourseVideoPlayer
                lesson={currentLesson}
                onLessonComplete={(lesson) => {
                  // Mark lesson as completed and move to next lesson
                  console.log("Lesson completed:", lesson);
                }}
              />
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-lg shadow-lg p-4 lg:p-6">
              <CourseContent lesson={currentLesson} section={currentSection} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CoursePage;
