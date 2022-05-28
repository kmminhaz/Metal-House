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
      fetch(
        `https://limitless-scrubland-96637.herokuapp.com/myProfile/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }, [user]);
  return [token];
};

export default useToken;
