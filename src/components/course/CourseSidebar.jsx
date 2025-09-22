import { LockKeyhole } from "lucide-react";
import React, { useState } from "react";
import { FaPlay, FaCheck, FaClock, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Button } from "../ui/button";

function CourseSidebar({ course, activeLesson, onLessonSelect, setIsBNSP }) {
  const sections = course?.sections || [];

  // State untuk track section mana yang terbuka
  const [expandedSections, setExpandedSections] = useState(
    sections.reduce((acc, section) => {
      acc[section.id] = true; // Default semua section terbuka
      return acc;
    }, {})
  );

  console.log(expandedSections);

  // Toggle expand/collapse section
  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header Sidebar */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900">Konten Kursus</h3>
      </div>
      <div className="py-2 px-2  bg-orange-500 text-neutral-50 cursor-pointer">
        <Button className="cursor-pointer flex justify-between w-full" onClick={() => setIsBNSP(true)}>
          <h2>Sertifikasi BNSP</h2>
          <LockKeyhole />
        </Button>
      </div>

      {/* Sections List */}
      <div className="flex-1 overflow-y-auto">
        {sections.map((section) => (
          <div key={section.id} className="border-b border-gray-100">
            {/* Section Header */}
            <button onClick={() => toggleSection(section.id)} className="w-full p-4 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">{section.title}</h4>
                  <p className="text-xs text-gray-500">
                    {section.lessons.length} video ({section.lessons.reduce((total, lesson) => total + parseInt(lesson.duration), 0)} menit)
                  </p>
                </div>
              </div>

              {expandedSections[section.id] ? <FaChevronDown className="text-gray-400 text-sm" /> : <FaChevronRight className="text-gray-400 text-sm" />}
            </button>

            {/* Lessons List */}
            {expandedSections[section.id] && (
              <div className="bg-gray-50">
                {section.lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => onLessonSelect(lesson, section)}
                    className={`w-full p-3 pl-16 text-left hover:bg-gray-100 transition-colors duration-200 border-l-4 ${activeLesson?.id === lesson.id ? "border-orange-500 bg-orange-50" : "border-transparent"}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {/* Status Icon */}
                        <div className="flex-shrink-0">
                          {lesson.completed ? (
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <FaCheck className="text-white text-xs" />
                            </div>
                          ) : activeLesson?.id === lesson.id ? (
                            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                              <FaPlay className="text-white text-xs" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center">
                              <FaPlay className="text-gray-400 text-xs" />
                            </div>
                          )}
                        </div>

                        {/* Lesson Info */}
                        <div className="min-w-0 flex-1">
                          <p className={`text-sm font-medium truncate ${activeLesson?.id === lesson.id ? "text-orange-600" : "text-gray-900"}`}>{lesson.title}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <FaClock className="text-gray-400 text-xs" />
                            <span className="text-xs text-gray-500">{lesson.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer dengan Progress */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="text-sm text-gray-600">
          <div className="flex justify-between items-center mb-2">
            <span>Progress Kursus</span>
            <span className="font-semibold">
              {Math.round((sections.reduce((total, section) => total + section.lessons.filter((lesson) => lesson.completed).length, 0) / sections.reduce((total, section) => total + section.lessons.length, 0)) * 100) || 0}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-orange-500 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${(sections.reduce((total, section) => total + section.lessons.filter((lesson) => lesson.completed).length, 0) / sections.reduce((total, section) => total + section.lessons.length, 0)) * 100 || 0}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseSidebar;
