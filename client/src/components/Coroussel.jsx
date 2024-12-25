// import React from 'react';
// import { Carousel } from 'flowbite-react';

// import img1 from './images/img1.png';
// import img2 from './images/img2.png';
// import img3 from './images/img3.png';
// import img4 from './images/img4.png';
// import img5 from './images/img5.png';
// import img6 from './images/img6.png';

// function Coroussel() {
//   return (
//     <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
//       <Carousel pauseOnHover>
//         <img src={img1} alt="Image 1" />
//         <img src={img2} alt="Image 2" />
//         <img src={img3} alt="Image 3" />
//         <img src={img4} alt='Image 4'/>
//         <img src={img5} alt='Image 5'/>
//         <img src={img6} alt='Image 6'/>
//       </Carousel>
//     </div>
//   );
// }

// export default Coroussel;

import React from 'react';
import { Carousel } from 'flowbite-react';

function Coroussel() {
  return (
    <div className="w-full h-[500px] sm:h-[600px] lg:h-[700px] 2xl:h-[800px]">
      <Carousel pauseOnHover slideInterval={2500}>
        <div className="relative w-full h-full">
          <img src="/images/img1.png" alt="Image 1" className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-3xl sm:text-5xl font-bold">Image 1 Caption</h1>
          </div>
        </div>
        <div className="relative w-full h-full">
          <img src='/images/img2.png' alt="Image 2" className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-3xl sm:text-5xl font-bold">Image 2 Caption</h1>
          </div>
        </div>
        <div className="relative w-full h-full">
          <img src='/images/img3.png' alt="Image 3" className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-3xl sm:text-5xl font-bold">Image 3 Caption</h1>
          </div>
        </div>
        <div className="relative w-full h-full">
          <img src='/images/img4.png' alt="Image 4" className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-3xl sm:text-5xl font-bold">Image 4 Caption</h1>
          </div>
        </div>
        <div className="relative w-full h-full">
          <img src='/images/img5.png' alt="Image 5" className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-3xl sm:text-5xl font-bold">Image 5 Caption</h1>
          </div>
        </div>
        <div className="relative w-full h-full">
          <img src='/images/img6.png' alt="Image 6" className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-3xl sm:text-5xl font-bold">Image 6 Caption</h1>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Coroussel;
