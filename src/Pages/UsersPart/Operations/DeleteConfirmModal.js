import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ order, refetch }) => {
  const { productName, _id } = order;

  const handleDeleteOrder = async (id) => {
    await fetch(`https://metal-house-server-side.onrender.com/myOrders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged === true) {
          toast.success("The Order Deleted Successfully");
          refetch();
        }
      });
  };
  return (
    <div>
      <input
        type='checkbox'
        id='delete-confirm-modal'
        className='modal-toggle'
      />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg text-error'>
            Are you sure you want to delete order for {productName}?
          </h3>
          <p className='py-4'>
            Once you delete the order, The order will be canceled .
          </p>
          <div className='modal-action'>
            <label
              for='delete-confirm-modal'
              className='btn'
              onClick={() => {
                handleDeleteOrder(_id);
              }}
            >
              Delete
            </label>
            <label for='delete-confirm-modal' className='btn'>
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
