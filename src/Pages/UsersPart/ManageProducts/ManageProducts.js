import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import DeleteConfirmModal from "../Operations/DeleteConfirmModal";
import { useQuery } from "react-query";
import DeleteProduct from "./DeleteProduct";

const ManageProducts = () => {
  const [deleteProduct, setDeleteProduct] = useState(null);

  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch(`https://limitless-scrubland-96637.herokuapp.com/tools`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className='overflow-x-auto my-5'>
        <table className='table w-full'>
          {/* <!-- head --> */}
          <thead>
            <tr className='text-center'>
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Minimum Order</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody className=''>
            {/* <!-- row 2 --> */}
            {tools.map((tool, index) => (
              <tr className='hover text-center'>
                <th>{index + 1}</th>
                <td>{tool.name}</td>
                <td>
                  <img src={tool.img} alt='' height={75} width={75} />
                </td>
                <td>{tool.price} $</td>
                <td>{tool.available_quantity}</td>
                <td>{tool.minimum_order_quantity}</td>
                <td>
                  <label
                    for='delete-product-modal'
                    className='btn btn-sm btn-error font-bold'
                    //   disabled='disabled'
                    onClick={() => setDeleteProduct(tools)}
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteProduct && (
        <DeleteProduct
          product={deleteProduct}
          refetch={refetch}
        ></DeleteProduct>
      )}
    </div>
  );
};

export default ManageProducts;
