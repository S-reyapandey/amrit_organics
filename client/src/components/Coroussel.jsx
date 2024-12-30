import React from "react";
import { Carousel } from "flowbite-react";

function Coroussel() {
  return (
    <div className="w-full h-[500px] sm:h-[600px] lg:h-[700px] 2xl:h-[800px]">
      <Carousel pauseOnHover slideInterval={2500}>
        <div className="relative w-full h-full">
          <img
            src="/images/img1.png"
            alt="Image 1"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-3xl sm:text-5xl font-bold">
              Image 1 Caption
            </h1>
          </div>
        </div>
        <div className="relative w-full h-full">
          <img
            src="/images/img2.png"
            alt="Image 2"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-3xl sm:text-5xl font-bold">
              Image 2 Caption
            </h1>
          </div>
        </div>
        <div className="relative w-full h-full">
          <img
            src="/images/img3.png"
            alt="Image 3"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-3xl sm:text-5xl font-bold">
              Image 3 Caption
            </h1>
          </div>
        </div>
        <div className="relative w-full h-full">
          <img
            src="/images/img4.png"
            alt="Image 4"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-3xl sm:text-5xl font-bold">
              Image 4 Caption
            </h1>
          </div>
        </div>
        <div className="relative w-full h-full">
          <img
            src="/images/img5.png"
            alt="Image 5"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-3xl sm:text-5xl font-bold">
              Image 5 Caption
            </h1>
          </div>
        </div>
        <div className="relative w-full h-full">
          <img
            src="/images/img6.png"
            alt="Image 6"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-3xl sm:text-5xl font-bold">
              Image 6 Caption
            </h1>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Coroussel;
