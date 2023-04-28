import React, { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState([]);

  useEffect(() => {
    const email = user?.user?.email;
    const name = user?.user?.displayName;

    if (email) {
      const currentUser = {
        name: name,
        email: email,
        access: "user",
        phoneNumber: "",
        education: "",
        location: "",
        linkedInProfile: "",
      };
      console.log(currentUser);
      fetch(`https://metal-house-server.vercel.app/profile/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
