import React from "react";
import myImage from "../../Assets/Images/myImage.jpg"

const MyPortfolio = () => {
  return (
    <div className='lg:w-1/2 mx-auto my-5 bg-base-300 pb-10'>
      <img className="mx-auto pt-5 rounded-3xl shadow-lg" src={myImage} alt='' width={300} height={300}/>
      <h2 className='text-2xl font-bold my-3'>K. M. Minhaz Uddin</h2>
      <h3 className='text-xl py-1'>kmminhaj.khan@gmail.com</h3>
      <div className='lg:w-1/2 w-80 mx-auto text-left'>
        <div className='text-xl py-1 text-left'>
          <p className='font-bold'>
            As-Salamu Alaikum, <br />
          </p>
          <div className='my-2 text-lg'>
            <p className='py-1'>
              I have passed my SSC in 2015 from Al-Amin Academy School and
              College and passed with the CGPA of 5.00.
            </p>{" "}
            <p className='py-1'>
              Then I went to Monipur High School & College for my HSC and passed
              with the CGPA of 4.08.
            </p>
            <p className='py-1'>
              Recently I have just Completed my BSc in CSE from Daffodil
              International University with the CGPA of 3.37.
            </p>
          </div>
        </div>
        <div className='text-xl'>
          <span className='text-white font-bold'>Tecnologies :</span> <br />
          <p className='pl-5 font-bold'>
            Javascript,React, NodeJs, Express, MongoDB, MySQL, Bootstrap,
            Telwinde.
          </p>
        </div>
      </div>
      <div className='text-left lg:w-1/2 w-80 mx-auto'>
        <p className='text-left font-bold pt-3 text-white'>
          Three of my best websites :{" "}
        </p>
        <p className='pl-5 font-bold'>https://metal-house.web.app</p>
        <p className='pl-5 font-bold'>https://garage-zeromoto.web.app</p>
        <p className='pl-5 font-bold'>
          https://wild-photographer-2ea91.web.app
        </p>
      </div>
    </div>
  );
};

export default MyPortfolio;
