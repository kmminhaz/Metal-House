import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteConfirmModal from "../Operations/DeleteConfirmModal";

const MyOrders = () => {
  const [deleteOrder, setDeleteOrder] = useState(null);
  return (
    <div>
      <div className='overflow-x-auto my-5'>
        <table className='table w-full'>
          {/* <!-- head --> */}
          <thead>
            <tr className='text-center'>
              <th>#</th>
              <th>Name</th>
              <th>transaction ID</th>
              <th>Price</th>
              <th>Order Amount</th>
              <th>Order Status</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody className='text-white'>
            {/* <!-- row 2 --> */}
            <tr className='hover text-center'>
              <th>1</th>
              <td>Nuts & Bolts</td>
              <td>60000</td>
              <td>0.50 $</td>
              <td>10000</td>
              <td>Pending</td>
              <td>
                <Link
                  to='/dashboard/payment'
                  for='delete-confirm-modal'
                  className='btn btn-sm btn-primary font-bold mr-2'
                  //   disabled='disabled'
                >
                  Payment
                </Link>
                <label
                  for='delete-confirm-modal'
                  className='btn btn-sm btn-error font-bold'
                  //   disabled='disabled'
                  onClick={() => setDeleteOrder(1)}
                >
                  Delete
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {deleteOrder && <DeleteConfirmModal></DeleteConfirmModal>}
    </div>
  );
};

export default MyOrders;
