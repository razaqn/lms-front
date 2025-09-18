import { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function VideoPlayer({ 
  videoUrl = "", 
  thumbnailUrl = "/api/placeholder/640/360",
  title = "Course Video"
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Di sini nanti bisa ditambahkan logic untuk play/pause video
  };

  return (
    <div className="relative w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg">
      {/* Video Container */}
      <div className="relative aspect-video bg-gray-300">
        {/* Thumbnail/Video Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${thumbnailUrl})`,
            backgroundColor: '#d1d5db' // fallback gray color
          }}
        >
          {/* Overlay untuk memberikan efek gelap */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={handlePlayPause}
            className="group bg-black bg-opacity-70 hover:bg-opacity-90 text-white rounded-full p-6 transition-all duration-300 transform hover:scale-110"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <FaPause className="text-2xl ml-1" />
            ) : (
              <FaPlay className="text-2xl ml-1" />
            )}
          </button>
        </div>

        {/* Video Controls Overlay (Optional) */}
        {showControls && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePlayPause}
                  className="hover:text-orange-400 transition-colors"
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <span className="text-sm">0:00 / 15:30</span>
              </div>
              
              {/* Progress Bar */}
              <div className="flex-1 mx-4">
                <div className="bg-white bg-opacity-30 rounded-full h-1">
                  <div className="bg-orange-500 h-1 rounded-full w-1/4"></div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="hover:text-orange-400 transition-colors text-sm">
                  HD
                </button>
                <button className="hover:text-orange-400 transition-colors text-sm">
                  ⛶
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Video Info */}
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">
          Apakah anda ingin membuat banner atau design produk untuk bisnis anda? Maka belajar photoshop 
          adalah pilihan terbaik untuk anda agar anda dapat membuat design untuk bisnis anda sendiri. Lorem 
          ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
}