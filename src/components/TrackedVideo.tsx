import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { trackEvent } from '@/lib/analytics';

interface TrackedVideoProps {
  src: string;
  videoName: string;
  featureTitle: string;
}

const TrackedVideo: React.FC<TrackedVideoProps> = ({ src, videoName, featureTitle }) => {
  const videoRefSetter = useIntersectionObserver(
    () => {
      trackEvent('video_view', {
        section: 'features',
        video_name: videoName,
        feature_title: featureTitle,
      });
    },
    { threshold: 0.75, once: true }
  );

  return (
    <video
      ref={videoRefSetter}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default TrackedVideo;
