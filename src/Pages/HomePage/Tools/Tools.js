import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bolts from "../../../Assets/Images/bolts-nuts.jpg";

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("https://metal-house-server.vercel.app/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <div>
      <h1 className='text-5xl font-bold mb-16'> Tools </h1>
      <div className='container mx-auto flex justify-center'>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-16'>
          {tools.map((tool) => (
            <div className='card lg:w-96 w-80 bg-base-300 shadow-xl'>
              <figure>
                <img src={tool.img} alt='Shoes' className='w-full h-56' />
              </figure>
              <div className='card-body border-white text-left'>
                <h2 className='card-title uppercase'>{tool.name}</h2>
                <p className='text-left'>
                  {tool.description.slice(0, 200)} . . .
                </p>
                <h5 className='text-xl font-bold'>
                  Price :{" "}
                  <div className='badge badge-outline'>{tool.price} $</div>
                </h5>
                <h5 className='text-xl font-bold'>
                  Available Quantity:{" "}
                  <div className='badge badge-outline'>
                    {tool.available_quantity}
                  </div>
                  <span className='text-sm px-1'> Pices </span>
                </h5>
                <h5 className='text-xl font-bold'>
                  Order minimum :{" "}
                  <div className='badge badge-outline'>
                    {tool.minimum_order_quantity}
                  </div>
                  <span className='text-sm px-1'> Pices </span>
                </h5>
                <div className='card-actions justify-end my-3'>
                  <Link
                    to={`/purchase/${tool._id}`}
                    className='btn btn-primary'
                  >
                    Purchase
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
