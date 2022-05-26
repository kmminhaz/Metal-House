import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div class='drawer drawer-mobile'>
        <input id='dashboardSidebar' type='checkbox' class='drawer-toggle' />
        <div class='drawer-content'>
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div>
        <div class='drawer-side'>
          <label for='dashboardSidebar' class='drawer-overlay'></label>
          <ul class='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to='/dashboard'>My Orders</Link>
            </li>
            <li>
              <Link to='/dashboard/addreviews'>Add Reviews</Link>
            </li>
            <li>
              <Link to='/dashboard/myprofile'>My Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
