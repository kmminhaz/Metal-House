import React from 'react';
import paymentMethods from '../Assets/Images/payment.png'
import {
  LocationMarkerIcon,
  MailIcon
} from "@heroicons/react/solid";

const Footer = () => {
    return (
      <div>
        <div className='w-full mx-auto bg-base-300 rounded-lg'>
          <div className='w-10/12 mx-auto bg-base-300'>
            <div className='flex flex-wrap justify-between items-center text-white'>
              <div className='text-left lg:w-1/4 h-58 py-5 px-2 lg:ml-28'>
                <h3 className='text-xl font-bold py-1'>Contact Us</h3>
                <div className='flex items-center'>
                  <p className='w-8'>
                    {" "}
                    <LocationMarkerIcon />{" "}
                  </p>
                  <p className='py-1 px-2'>
                    Level-4, 54, Rose Vila, Dhanmondi, Dhaka
                  </p>
                </div>
                <div className='flex items-center'>
                  <p className='w-8'>
                    {" "}
                    <MailIcon />{" "}
                  </p>
                  <p className='py-1 px-2'>kmminhaj.khan@gmail.com</p>
                </div>
              </div>
              <div className='text-left lg:w-1/4 h-58 py-5 px-2 lg:mr-16'>
                <h3 className='text-xl font-bold pb-3'>Shop With Us</h3>
                <img src={paymentMethods} alt='' className='pb-3' />
                <p className='py-1'>
                  Manufacturer - <span className='font-bold'>Metal House</span>
                </p>
                <p>Design & Developed by K. M. Minhaz Uddin</p>
              </div>
            </div>
            <p className='py-5 font-bold text-white'>
              All Rights Reserved by @K. M. Minhaz Uddin
            </p>
          </div>
        </div>
      </div>
    );
};

export default Footer;