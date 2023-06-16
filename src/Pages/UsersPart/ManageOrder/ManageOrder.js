import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteConfirmModal from "../Operations/DeleteConfirmModal";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { toast } from "react-toastify";

const ManageOrder = () => {
  const [deleteOrder, setDeleteOrder] = useState(null);
  const [user] = useAuthState(auth);

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`https://metal-house-server-side.onrender.com/orders`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleApprovedProduct = (id) => {
    fetch(`https://metal-house-server-side.onrender.com/shippedOrder/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ orderStatus: "shipped" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          refetch();
          toast.success("The Product Shipment Successfull !");
        }
      });
  };

  return (
    <div>
      <div className='overflow-x-auto my-5'>
        <table className='table w-full'>
          {/* <!-- head --> */}
          <thead>
            <tr className='text-center'>
              <th>#</th>
              <th>User Email</th>
              <th>User Phone</th>
              <th>Product Name</th>
              <th>Order Quantity</th>
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
                      order.orderStatus === "unpaid"
                        ? "btn-active"
                        : "btn-disabled"
                    } font-bold mr-2`}
                    onClick={() => setDeleteOrder(order)}
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteOrder && (
        <DeleteConfirmModal
          order={deleteOrder}
          refetch={refetch}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageOrder;
