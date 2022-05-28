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
    fetch(`https://limitless-scrubland-96637.herokuapp.com/orders`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleApprovedProduct = (id) => {
    fetch(`http://localhost:5000/shippedOrder/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ orderStatus: "shipped" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data){
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
                      order.orderStatus === "unpaid"
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
