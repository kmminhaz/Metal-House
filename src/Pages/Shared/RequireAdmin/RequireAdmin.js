import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";
import { useQuery } from "react-query";

const RequiredAdmin = ({ children }) => {
  const [user] = useAuthState(auth);
  const currentLocation = useLocation();

  const { data: profile, isLoading } = useQuery("profile", () =>
    fetch(
      `https://limitless-scrubland-96637.herokuapp.com/myProfile/${user?.email}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (!user || profile.access !== "Admin") {
    return (
      <div>
        <Navigate to='/login' state={{ from: currentLocation }} replace />
      </div>
    );
  } else {
    toast.error("Authorization Faild!!.");
  }

  return children;
};

export default RequiredAdmin;
