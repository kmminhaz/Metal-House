import { ChartSquareBarIcon, CollectionIcon, CubeIcon, UsersIcon } from '@heroicons/react/solid';
import React from 'react';
import rangerover from "../../../Assets/Images/Companies/range-rover.png"
import ducati from "../../../Assets/Images/Companies/ducati-logo.png"
import triump from "../../../Assets/Images/Companies/Triumph-Logo.jpg"
import yamaha from "../../../Assets/Images/Companies/Yamaha-Logo.png"
import suzuki from "../../../Assets/Images/Companies/suzuki.png"

const Companies = () => {
    return (
      <div>
        <h1 className='text-5xl font-bold mb-16'> Top Customers </h1>
        <div className='w-10/12 mx-auto flex justify-center'>
          <div className='grid lg:grid-cols-5 grid-cols-2 lg:gap-12 gap-10 gap-y-10'>
            <div className='flex justify-center items-center bg-white rounded-lg'>
              <img
                src={triump}
                alt=''
                srcset=''
                className=''
                width={150}
              />
            </div>
            <div className='flex justify-center items-center bg-white rounded-lg'>
              <img src={ducati} alt='' srcset='' width={150} />
            </div>
            <div className='flex justify-center items-center bg-white rounded-lg'>
              <img src={rangerover} alt='' srcset='' width={150} />
            </div>
            <div className='flex justify-center items-center bg-white rounded-lg'>
              <img src={yamaha} alt='' srcset='' width={150} />
            </div>
            <div className='flex justify-center items-center bg-white rounded-lg'>
              <img src={suzuki} alt='' srcset='' width={150} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Companies;