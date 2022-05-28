import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteConfirmModal from "../Operations/DeleteConfirmModal";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const ManageOrder = () => {
  const [deleteOrder, setDeleteOrder] = useState(null);
  const [user] = useAuthState(auth);

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/orders`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleApprovedProduct = (id) => {
    // fetch
  };

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
            {orders.map((order, index) => (
              <tr className='hover text-center'>
                <th>{index + 1}</th>
                <td>{order.userEmail}</td>
                <td>{order.userPhone}</td>
                <td>{order.productName}</td>
                <td>{order.orderQuantity}</td>
                <td>{order.orderStatus}</td>
                <td>
                  <button
                    className={`btn btn-sm btn-success ${
                      order.orderStatus === "pending"
                        ? "btn-active"
                        : "btn-disabled"
                    } font-bold mr-2`}
                    onClick={() => {
                      handleApprovedProduct(order._id);
                    }}
                  >
                    approved
                  </button>
                  <label
                    for='delete-confirm-modal'
                    className={`btn btn-sm btn-error ${
                      order.orderStatus !== "pending"
                        ? "btn-active"
                        : "btn-disabled"
                    } font-bold mr-2`}
                    onClick={() => setDeleteOrder(1)}
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteOrder && <DeleteConfirmModal></DeleteConfirmModal>}
    </div>
  );
};

export default ManageOrder;
