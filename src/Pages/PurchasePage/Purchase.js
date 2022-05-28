import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [tool, setTool] = useState([]);
  const [order, setOrder] = useState(null);
  const [orderError, setOrderError] = useState(null);

  useEffect(() => {
    fetch(`https://limitless-scrubland-96637.herokuapp.com/tools/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTool(data);
        setOrder(data.minimum_order_quantity);
      });
  }, []);

  // const refatch = async () => {
  //   await fetch(`https://limitless-scrubland-96637.herokuapp.com/tools/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTool(data);
  //       setOrder(data.minimum_order_quantity);
  //     });
  // };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const payable = parseInt(order) * parseInt(tool.price);
    const placeOrder = {
      productId: id,
      productName: tool.name,
      userEmail: user.email,
      userPhone: data.phone,
      shipmentAddress: data.address,
      orderQuantity: order,
      orderPayable: payable,
      orderStatus: "unpaid",
      transactionId: "",
    };
    
    await fetch("https://limitless-scrubland-96637.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(placeOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast("The Order Successfully Added to Order List");
          // const newAvailableQuantity =
          //   parseInt(tool.available_quantity) -
          //   parseInt(placeOrder.orderQuantity);
          // console.log(newAvailableQuantity);
          // fetch("", {
          //   method: "PUT",
          //   headers: {
          //     "content-type" : "application/json"
          //   },
          //   body: JSON.stringify()
          // }).then(res => res.json()).then(result => console.log(result))
        }
      });
  };

  const handleOrderQuantity = (event) => {
    const orderingQuantity = event.target.value;
    if (
      orderingQuantity >= tool.minimum_order_quantity &&
      orderingQuantity <= tool.available_quantity
    ) {
      setOrderError(null);
    } else {
      setOrderError(1);
    }
    setOrder(orderingQuantity);
  };
  return (
    <div className='w-10/12 mx-auto'>
      <div className='lg:w-1/2 mx-auto my-10'>
        {/* <div className='text-center lg:w-1/2 mx-auto py-2 bg-base-300 rounded-2xl'>
          <h4 className='text-xl font-bold pb-2 text-white'>
            {" "}
            Your Cradentials{" "}
          </h4>
          <p>kmminhaj.khan@gmail.com</p>
          <p>K. M. Minhaz Uddin</p>
      </div> */}
        <div class='divider font-bold text-xl'>ITEM DETAILS</div>
        <div className='p-10 text-left bg-base-300 rounded-lg'>
          <img src={tool.img} alt='' className='lg:w-1/2 mx-auto rounded-lg' />
          <h3 className='text-2xl text-center py-2'>{tool.name}</h3>
          <p className='text pb-2'>{tool.description}</p>
          <h5 className='text-xl font-bold'>
            Price : <div class='badge badge-outline'>{tool.price} $</div>
          </h5>
          <h5 className='text-xl font-bold'>
            Available Quantity :{" "}
            <div class='badge badge-outline text-xl p-2'>
              {tool.available_quantity}
            </div>
          </h5>
          <h5 className='text-xl font-bold'>
            Order Minimum :{" "}
            <div class='badge badge-outline'>{tool.minimum_order_quantity}</div>
          </h5>
        </div>
        <div class='divider font-bold'>ORDER HERE</div>
        <div className='p-10 text-left bg-base-300 rounded-lg'>
          <h3 className='text-center font-bold lg:text-4xl text-3xl'>ORDER</h3>
          {/* <p className='text-xl mt-2 text-success'> Hello Minhaz! </p> */}
          {/* <p className='text-xl mt-2 text-error'> Hello Minhaz! </p> */}
          <div className='card mt-5 my-10 mx-auto shadow-2xl bg-base-200'>
            <div className='card-body'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Product Id</span>
                  </label>
                  <input
                    type='text'
                    className='input w-full text-lg text-white'
                    value={id}
                    readOnly
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Product Name</span>
                  </label>
                  <input
                    type='text'
                    className='input w-full text-lg text-white'
                    value={tool.name}
                    readOnly
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input
                    type='text'
                    className='input w-full text-lg text-white'
                    value={user.email}
                    readOnly
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Phone No</span>
                  </label>
                  <input
                    {...register("phone", {
                      required: true,
                    })}
                    type='text'
                    placeholder='Phone'
                    className='input input-bordered w-full'
                  />
                  <label className='text-error pt-1'>
                    {errors.phone && "Phone Number is Required"}
                  </label>
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Shipment Address</span>
                  </label>
                  <input
                    {...register("address", {
                      required: true,
                    })}
                    type='text'
                    placeholder='Address'
                    className='input input-bordered w-full'
                  />
                  <label className='text-error'>
                    {errors.address && "Shipment Address is Required"}
                  </label>
                </div>
                <div className=''>
                  <label class='label'>
                    <span class='label-text pt-3'>Order Quantity</span>
                  </label>
                  <input
                    type='number'
                    value={order}
                    className='input input-bordered w-full'
                    onChange={handleOrderQuantity}
                  />
                </div>
                <div className='form-control mt-6'>
                  {orderError ? (
                    <div className='form-control mt-6'>
                      <p className='text-error pb-4'>
                        {" "}
                        Invalid Order Quantity{" "}
                      </p>
                      <button
                        type='submit'
                        className='btn btn-primary text-xl'
                        disabled
                      >
                        Purchase
                      </button>
                    </div>
                  ) : (
                    <button type='submit' className='btn btn-primary text-xl'>
                      Purchase
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
