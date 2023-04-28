import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteConfirmModal from "../Operations/DeleteConfirmModal";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import { toast } from "react-toastify";

const MakeAdmin = () => {
  const {
    data: profiles,
    isLoading,
    refetch,
  } = useQuery("profiles", () =>
    fetch(`https://metal-house-server.vercel.app/profiles`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleMakeAdmin = (id) => {
    fetch(`https://metal-house-server.vercel.app/makeAdmin/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ access: "Admin" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("A New Admin Has been Set");
          refetch();
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
              <th>Access Level</th>
            </tr>
          </thead>
          <tbody className='text-white'>
            {profiles.map((profile, index) => (
              <tr className='hover text-center'>
                <th>{index + 1}</th>
                <td>{profile.name}</td>
                <td>{profile.email}</td>
                <td>{profile.education}</td>
                <td>{profile.linkedInProfile}</td>
                <td>{profile.phoneNumber}</td>
                <td>
                  <label
                    for='delete-confirm-modal'
                    className={`btn btn-sm btn-primary font-bold ${
                      profile.access === "user" ? "btn-active" : "btn-disabled"
                    }`}
                    onClick={() => {
                      handleMakeAdmin(profile._id);
                    }}
                  >
                    Make Admin
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
