import React from "react";
import {
  UsersIcon,
  CollectionIcon,
  ChartSquareBarIcon,
  CubeIcon,
} from "@heroicons/react/solid";

const BusinessSummery = () => {
  return (
    <div className='container mx-auto flex justify-center'>
      <div className='grid lg:grid-cols-4 grid-cols-1 lg:gap-40 gap-y-10'>
        <div className='flex justify-center items-center'>
          <div className='mr-3'>
            <h4 className='lg:text-2xl text-white w-14'>
              <CollectionIcon></CollectionIcon>
            </h4>
          </div>
          <div>
            <h4 className='text-4xl p-3 text-white'>32+</h4>
            <p className='text-lg text-white'>Tools</p>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='mr-3'>
            <h4 className='lg:text-2xl text-white w-14'>
              <CubeIcon></CubeIcon>
            </h4>
          </div>
          <div>
            <h4 className='text-4xl p-3 text-white'>100+</h4>
            <p className='text-lg text-white'>Companies</p>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='mr-3'>
            <h4 className='lg:text-2xl text-white w-14'>
              <UsersIcon></UsersIcon>
            </h4>
          </div>
          <div>
            <h4 className='text-4xl p-3 text-white'>46K+</h4>
            <p className='text-lg text-white'>Reviews</p>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='mr-3'>
            <h4 className='lg:text-2xl text-white w-14'>
              <ChartSquareBarIcon></ChartSquareBarIcon>
            </h4>
          </div>
          <div>
            <h4 className='text-4xl p-3 text-white'>151M+</h4>
            <p className='text-lg text-white'>Revenue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
