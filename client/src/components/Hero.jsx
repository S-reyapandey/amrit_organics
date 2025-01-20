import React, { useRef, useEffect } from 'react';

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background with slower playback */}
      <video 
        ref={videoRef}
        autoPlay  
        muted 
        playsInline
        className="absolute w-full h-full object-cover scale-100"
      >
        <source src="https://res.cloudinary.com/dqmieig0r/video/upload/v1737358780/AdobeStock_289943177_Video_HD_Preview_online-video-cutter.com_ba4yqq.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />

      {/* Main Content */}
      <div className="absolute inset-0 container mx-auto px-4">
        <div className="h-full flex flex-col items-center justify-center">
          {/* Main Title Section with enhanced typography */}
          <div className="text-center space-y-8 transform translate-y-[16%]">
            {/* Primary Heading */}
            <div className="space-y-2">
              <h1 
                className="text-[2.2rem] md:text-3xl lg:text-5xl text-[#073620] font-medium tracking-wide mb-3 
                          transition-all duration-700 ease-out animate-fade-in"
                style={{fontFamily: "Lora", textShadow: "2px 2px 4px rgba(0,0,0,0.3)"}}
              >
                Cultivating Excellence
              </h1>
              
              <h2 
                className="text-[1.8rem] md:text-3xl lg:text-4xl text-[#073620]/90 font-medium
                          transition-all duration-700 delay-200"
                style={{fontFamily: "Lora", textShadow: "1px 1px 3px rgba(0,0,0,0.2)"}}
              >
                in Every Harvest
              </h2>

              {/* Decorative Separator */}
              <div className="flex items-center justify-center gap-4 py-4">
              <div className="w-16 h-[2px] bg-[#23740c] opacity-80 animate-extend" />
              <div className="w-2 h-2 bg-[#23740c] transform rotate-45" />
              <div className="w-16 h-[2px] bg-[#23740c] opacity-80 animate-extend" />
            </div>
            
            </div>

            {/* Discover Products Text */}
            <div className="transform translate-y-5">
              <p 
                className="text-4xl md:text-5xl text-white/90 italic
                          transition-all duration-700 delay-500"
                style={{
                  fontFamily: 'Caveat',
                  textShadow: "2px 2px 4px rgba(0,0,0,0.2)"
                }}
              >
                Discover our products
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add these keyframes to your global CSS
const styles = `
@keyframes extend {
  from {
    width: 0;
  }
  to {
    width: 7rem;
  }
}

.animate-extend {
  animation: extend 1.5s ease-out forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}
`;

export default HeroSection;