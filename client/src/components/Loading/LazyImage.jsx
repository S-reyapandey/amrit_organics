import React, { useEffect, useRef, useState } from "react";

function LazyImage({ src, alt, className, style }) {
  const imageRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(imageRef.current);
        }
      },
      {
        rootMargin: "50px",
        threshold: 0.1,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={imageRef} className={className} style={style}>
      {isInView && (
        <>
          <img
            src={src}
            alt={alt}
            className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"}`}
            style={{
              ...style,
              transition: "opacity 0.3s ease-in-out",
            }}
            loading="lazy"
            onLoad={handleLoad}
          />
          {!isLoaded && (
            <div
              className="absolute inset-0 bg-gray-200 animate-pulse"
              style={{
                ...style,
                position: "absolute",
              }}
            />
          )}
        </>
      )}
      {!isInView && <div className="bg-gray-200 animate-pulse" style={style} />}
    </div>
  );
}

export default LazyImage;
