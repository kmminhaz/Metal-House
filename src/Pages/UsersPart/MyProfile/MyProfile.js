import React, { useEffect, useState } from "react";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [education, setEducation] = useState(null);
  const [location, setLocation] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [linkedInProfile, setLinkedInProfile] = useState(null);
  const [myProfile, setMyProfile] = useState(null);

  useEffect(() => {
    fetch(
      `https://limitless-scrubland-96637.herokuapp.com/myProfile/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setEducation(data?.education);
        setLocation(data?.location);
        setPhoneNumber(data?.phoneNumber);
        setLinkedInProfile(data?.linkedInProfile);
        setMyProfile(data);
      });
  }, []);

  const handleEducation = (event) => {
    setEducation(event?.target?.value);
  };
  const handleLocation = (event) => {
    setLocation(event?.target?.value);
  };
  const handleNumber = (event) => {
    setPhoneNumber(event?.target?.value);
  };
  const handleLinkedIn = (event) => {
    setLinkedInProfile(event?.target?.value);
  };

  const handleMyProfileForm = (event) => {
    event.preventDefault();

    const myUpdatedProfile = {
      name: user.displayName,
      email: user.email,
      education: education,
      location: location,
      phoneNumber: phoneNumber,
      linkedInProfile: linkedInProfile,
    };

    fetch(
      `https://limitless-scrubland-96637.herokuapp.com/myProfile/${user.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(myUpdatedProfile),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          fetch(
            `https://limitless-scrubland-96637.herokuapp.com/myProfile/${user.email}`
          )
            .then((res) => res.json())
            .then((data) => {
              setEducation(data?.education);
              setLocation(data?.location);
              setPhoneNumber(data?.phoneNumber);
              setLinkedInProfile(data?.linkedInProfile);
              setMyProfile(data);
              toast.success("Your Profile is Updated");
            });
        }
      });
  };
  return (
    <div className='w-10/12 mx-auto lg:mx-0'>
      <div className='lg:w-1/2 mx-auto my-10'>
        <div className='text-center lg:w-1/2 py-2 bg-base-300 rounded-2xl'>
          <h4 className='text-xl font-bold pb-2 text-white'>
            {" "}
            Your Cradentials{" "}
          </h4>
          <p>{user.displayName}</p>
          <p>{user.email}</p>
        </div>
        <div className='divider font-bold'>OTHER DETAILS</div>
        <form onSubmit={handleMyProfileForm}>
          <div className='card p-10 text-left bg-base-300 rounded-2xl'>
            <div className='py-1'>
              <label className='label'>
                <span className='label-text text-sm'>Education</span>
              </label>
              <input
                type='text'
                className='input w-full'
                value={education}
                onChange={handleEducation}
              ></input>
            </div>
            <div className='py-1'>
              <label className='label'>
                <span className='label-text text-sm'>Location</span>
              </label>
              <input
                type='text'
                className='input w-full'
                value={location}
                onChange={handleLocation}
              ></input>
            </div>
            <div className='py-1'>
              <label className='label'>
                <span className='label-text text-sm'>Phone Number</span>
              </label>
              <input
                type='text'
                className='input w-full'
                value={phoneNumber}
                onChange={handleNumber}
              ></input>
            </div>
            <div className='py-1'>
              <label className='label'>
                <span className='label-text text-sm'>Linked-In Profile</span>
              </label>
              <input
                type='text'
                className='input w-full'
                value={linkedInProfile}
                onChange={handleLinkedIn}
              ></input>
            </div>
          </div>
          <div>
            <button
              type='submit'
              className={`btn ${
                myProfile ? "btn-success" : "btn-primary"
              } text-bold my-4 btn-wide text-xl`}
            >
              {myProfile ? "Update" : "Add Details"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
