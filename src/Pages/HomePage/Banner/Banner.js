import React from "react";
import banner1 from "../../../Assets/Images/Banner.jpg";

const Banner = () => {
  return (
    <div
      className='hero lg:min-h-fit min-h-screen'
      style={{ backgroundImage: `url(${banner1})` }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div class='text-white lg:aspect-[4/1.6] flex justify-start items-center'>
          <div class='flex flex-col h-60'>
            <div class='lg:text-6xl text-4xl font-bold text-left ml-5'>
              <p>Looking For a</p>
              <p className='pt-2'>Metal Manufucturer ?</p>
            </div>
            <p className='lg:text-base text-sm mt-8 text-left ml-5 lg:w-3/5 w-4/5'>
              From startups to global brands, we supply the world’s best custom
              fasteners and forged components to major component and automobile
              manufacturers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
