import React from "react";

const DeleteConfirmModal = () => {
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type='checkbox' id='delete-confirm-modal' class='modal-toggle' />
      <div class='modal modal-bottom sm:modal-middle'>
        <div class='modal-box'>
          <h3 class='font-bold text-lg'>
            Are you sure you want to delete your order ?
          </h3>
          <p class='py-4'>
            Once you delete the order, The order will be canceled . 
          </p>
          <div class='modal-action'>
            <label for='delete-confirm-modal' class='btn'>
              Delete
            </label>
            <label for='delete-confirm-modal' class='btn'>
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
