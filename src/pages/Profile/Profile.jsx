import React from "react";
import { useAuth } from "@polybase/react";
import Form from "../../components/MultiStepForm/Form";

const Profile = () => {
  const { auth, state } = useAuth();
  return (
    <div>
      {state != null ? (
        <div>
          <span>Welcome, {state.userId}</span> <br />
          <Form />
        </div>
      ) : (
        <div>Please Connect your wallet.</div>
      )}
    </div>
  );
};

export default Profile;
