import React from 'react';

const NotFound = () => {
    return (
      <div>
        <div>
          <h1 className='text-4xl font-bold text-error text-center p-5 m-5 pb-3 mb-3'>
            404 Page Not Found
          </h1>
          <h6 className='pb-5 mb-5'>
            <small className='font-bold text-white'>
              The address you are looking for is not a valid address for this site
            </small>
          </h6>
        </div>
      </div>
    );
};

export default NotFound;