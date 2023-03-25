import React from "react";
import { useAuth } from "@polybase/react";

const Profile = () => {
  const { auth, state } = useAuth();
  return (
    <div>
      {state != null ? (
        <div>
          <span>Welcome, {state.userId}</span> <br />
          <span>Please complete your profile registration.</span>
        </div>
      ) : (
        <div>Please Connect your wallet.</div>
      )}
    </div>
  );
};

export default Profile;
