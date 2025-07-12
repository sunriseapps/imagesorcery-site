
import React, { useState } from 'react';
import { Play, Star } from 'lucide-react';

const VideoSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoId = 'cXIGq4Rah3I';

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="py-20 bg-gradient-glow relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-muted rounded-xl relative overflow-hidden group cursor-pointer glow-effect hover:animate-video-glow transition-all duration-300">
              {!isVideoPlaying ? (
                <>
                  <img 
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="ImageSorcery Demo Video"
                    className="w-full h-full object-cover rounded-xl"
                    onClick={handlePlayVideo}
                    onError={(e) => {
                      e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                    }}
                  />
                  {/* Play button overlay */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-300 rounded-xl"
                    onClick={handlePlayVideo}
                  >
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                </>
              ) : (
                /* YouTube iframe */
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title="ImageSorcery Demo Video"
                  className="w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
