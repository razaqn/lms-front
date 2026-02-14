import React, { useState } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaExpand, FaForward, FaBackward } from "react-icons/fa";

function CourseVideoPlayer({ lesson }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(300); // 5 menit default
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);

  // Toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Format time untuk display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Handle progress bar click
  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    setCurrentTime(newTime);
  };

  return (
    <div className="relative bg-black aspect-video w-full">
      {/* Video Area - Placeholder */}
      <div className="w-full h-full flex items-center justify-center cursor-pointer relative" onClick={togglePlay} onMouseEnter={() => setShowControls(true)} onMouseLeave={() => setShowControls(false)}>
        {/* Video Placeholder */}
        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
          {!isPlaying ? (
            <div className="text-center">
              <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-orange-600 transition-colors">
                <FaPlay className="text-white text-2xl ml-1" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">{lesson?.title || "Pilih lesson untuk mulai belajar"}</h3>
              <p className="text-gray-300">{lesson?.duration || "Durasi: --:--"}</p>
            </div>
          ) : (
            <div className="text-center">
              <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaPause className="text-white text-2xl" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">{lesson?.title}</h3>
              <p className="text-gray-300">Video sedang diputar...</p>
            </div>
          )}
        </div>

        {/* Video Controls Overlay */}
        {showControls && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="w-full h-2 bg-gray-600 rounded-full cursor-pointer" onClick={handleProgressClick}>
                <div className="h-full bg-orange-500 rounded-full transition-all duration-300" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
              </div>
              <div className="flex justify-between text-white text-sm mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Previous/Next Buttons */}
                <button className="text-white hover:text-orange-500 transition-colors">
                  <FaBackward className="text-lg" />
                </button>

                {/* Play/Pause Button */}
                <button onClick={togglePlay} className=" rounded-full flex items-center justify-center text-white hover:text-orange-600 transition-colors">
                  {isPlaying ? <FaPause className="text-lg" /> : <FaPlay className="text-lg ml-1" />}
                </button>

                <button className="text-white hover:text-orange-500 transition-colors">
                  <FaForward className="text-lg" />
                </button>

                {/* Time Display */}
                <div className="text-white text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* Volume Control */}
                <div className="flex items-center space-x-2">
                  <FaVolumeUp className="text-white" />
                  <input type="range" min="0" max="1" step="0.1" value={volume} onChange={(e) => setVolume(parseFloat(e.target.value))} className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer" />
                </div>

                {/* Fullscreen Button */}
                <button className="text-white hover:text-orange-500 transition-colors">
                  <FaExpand className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Loading State */}
      {isPlaying && (
        <div className="absolute top-4 right-4">
          <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}

export default CourseVideoPlayer;
