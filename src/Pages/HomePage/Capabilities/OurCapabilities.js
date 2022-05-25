import React from "react";
import Capabilities from "../../../Assets/Images/Our_Capabilities.jpg";

const OurCapabilities = () => {
  return (
    <div className='w-10/12 mx-auto'>
      <div className="lg:mx-5">
        <div class='hero min-h-full bg-base-200 rounded-lg'>
          <div class='hero-content flex-col lg:flex-row'>
            <div className='lg:w-1/2'>
              <img
                src={Capabilities}
                className='lg:max-w-lg rounded-lg shadow-2xl'
              />
            </div>
            <div className='lg:w-1/2'>
              <h1 class='lg:text-5xl text-3xl font-bold'>Our Capabilities</h1>
              <p class='py-6'>
                Get yourself inspired–now and make it happen. Transform your
                ideas into reality with Metal-House manufacturing capabilities.
                With over four decades of experience in producing suppling and
                manufacturing
              </p>
              <button class='btn btn-primary'>Go To Tools</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCapabilities;
