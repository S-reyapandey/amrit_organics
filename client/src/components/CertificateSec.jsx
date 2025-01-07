import React, { useState, useEffect, useRef } from 'react';
import certifications from "../utils/certiData"
import { Dialog, DialogContent } from '@mui/material';
import { Close } from '@mui/icons-material';

function CertificateSec() {
  const [hoveredCert, setHoveredCert] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [horizontalOffset, setHorizontalOffset] = useState(0);
  const [verticalOffset, setVerticalOffset] = useState(0);
  
  const horizontalAnimationRef = useRef(null);
  const verticalAnimationRef = useRef(null);
  
  const SCROLL_SPEED = 1;
  const ITEM_WIDTH = 250;
  const ITEM_HEIGHT = 160;

  // Horizontal circular scroll
  useEffect(() => {
    const animate = () => {
      setHorizontalOffset(prev => (prev + SCROLL_SPEED) % (ITEM_WIDTH * certifications.length));
      horizontalAnimationRef.current = requestAnimationFrame(animate);
    };

    if (hoveredCert === null) {
      horizontalAnimationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (horizontalAnimationRef.current) {
        cancelAnimationFrame(horizontalAnimationRef.current);
      }
    };
  }, [hoveredCert]);

  // Vertical circular scroll
  useEffect(() => {
    const animate = () => {
      setVerticalOffset(prev => (prev + SCROLL_SPEED) % ITEM_HEIGHT);
      verticalAnimationRef.current = requestAnimationFrame(animate);
    };

    if (hoveredCert !== null) {
      verticalAnimationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (verticalAnimationRef.current) {
        cancelAnimationFrame(verticalAnimationRef.current);
      }
    };
  }, [hoveredCert]);

  const getVisibleCertificates = () => {
    const visibleCerts = [];
    const viewportWidth = window.innerWidth;
    
    for (let i = -2; i < (viewportWidth / ITEM_WIDTH) + 3; i++) {
      const index = Math.floor(((horizontalOffset / ITEM_WIDTH) + i) % certifications.length);
      const adjustedIndex = index < 0 ? certifications.length + index : index;
      visibleCerts.push({
        ...certifications[adjustedIndex],
        position: i * ITEM_WIDTH - (horizontalOffset % ITEM_WIDTH)
      });
    }
    
    return visibleCerts;
  };

  return (
    <div className="w-full py-10 overflow-hidden">
    <div className="text-center mb-12">
    <h3
      className="text-yellow-400 text-2xl mb-2"
      style={{ fontFamily: "Courgette" }}
    >
      Certifications
    </h3>
  </div>

      <div className="relative min-h-[200px]">
        <div className="flex relative">
          {getVisibleCertificates().map((cert, idx) => (
            <div
              key={`${cert.id}-${idx}`}
              className="absolute flex-shrink-0 px-4"
              style={{
                width: `${ITEM_WIDTH}px`,
                transform: `translateX(${cert.position}px)`,
                willChange: 'transform'
              }}
              onMouseEnter={() => setHoveredCert(cert.id)}
              onMouseLeave={() => setHoveredCert(null)}
              onClick={() => {
                setSelectedCert(cert);
                setModalOpen(true);
              }}
            >
              <div className="h-48 overflow-hidden rounded-xl bg-transparent duration-500">
                <div
                  style={{
                    transform: hoveredCert === cert.id 
                      ? `translateY(-${verticalOffset}px)` 
                      : 'translateY(0)',
                    willChange: 'transform'
                  }}
                >
                  {Array(4).fill(cert.image).map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={cert.name}
                      className="w-full h-48 object-contain p-4"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-4xl relative">
          {selectedCert && (
            <div className="relative p-8">
              <button
                onClick={() => setModalOpen(false)}
                className="absolute right-1 top-1 hover:bg-red-500 p-2 rounded-full"
              >
                <Close className="w-6 h-6 flex-end justify-end" />
              </button>
              <img
                src={selectedCert.doc}
                alt={selectedCert.name}
                className="w-full rounded-lg object-contain max-h-[80vh]"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CertificateSec;