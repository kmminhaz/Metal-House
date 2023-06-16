import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeleteConfirmModal from "../Operations/DeleteConfirmModal";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [deleteOrder, setDeleteOrder] = useState(null);
  const navigate = useNavigate();

  const {
    data: myOrders,
    isLoading,
    refetch,
  } = useQuery("myOrders", () =>
    fetch(
      `https://metal-house-server-side.onrender.com/myOrders?userEmail=${user.email}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const goToPaymentPage = (id) => {
    navigate(`/dashboard/payment/${id}`);
  };

  return (
    <div>
      <div className='overflow-x-auto my-5'>
        <table className='table w-full'>
          {/* <!-- head --> */}
          <thead>
            <tr className='text-center'>
              <th>#</th>
              <th>Product Id</th>
              <th>Order Quantity</th>
              <th>Order Payable</th>
              <th>Order Status</th>
              <th>Transaction Id</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody className='text-white'>
            {/* <!-- row 2 --> */}
            {myOrders.map((myOrder, index) => (
              <tr className='hover text-center'>
                <th>{index + 1}</th>
                <td>{myOrder.productId}</td>
                <td>{myOrder.orderQuantity}</td>
                <td>{myOrder.orderPayable} $</td>
                <td>{myOrder.orderStatus}</td>
                <td>{myOrder.transactionId}</td>
                <td>
                  {myOrder.transactionId ? (
                    <div>
                      <Link
                        to='/dashboard/payment'
                        for='delete-confirm-modal'
                        className='btn btn-sm btn-primary font-bold mr-2'
                        disabled='disabled'
                      >
                        Payment
                      </Link>
                      <label
                        for='delete-confirm-modal'
                        className='btn btn-sm btn-error font-bold'
                        disabled='disabled'
                        onClick={() => setDeleteOrder(1)}
                      >
                        Delete
                      </label>
                    </div>
                  ) : (
                    <div>
                      <button
                        onClick={() => {
                          goToPaymentPage(myOrder._id);
                        }}
                        className='btn btn-sm btn-primary font-bold mr-2'
                      >
                        Payment
                      </button>
                      <label
                        for='delete-confirm-modal'
                        className='btn btn-sm btn-error font-bold'
                        onClick={() => setDeleteOrder(myOrder)}
                      >
                        Delete
                      </label>
                    </div>
                  )}
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

export default MyOrders;
