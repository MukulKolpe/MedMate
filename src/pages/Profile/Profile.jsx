import React, { useState, useEffect } from "react";
import { useAuth } from "@polybase/react";
import Form from "../../components/MultiStepForm/Form";
import DisplayProfile from "../../components/DisplayProfile/DisplayProfile";
import { Polybase } from "@polybase/client";

const db = new Polybase({
  defaultNamespace:
    "pk/0x7774c566b97a8dd478608f1885586af3cd4590288dc6a6ef949be2e68637d81d2172cdb0fb8d1e286c318358911af8c477d13b08d7c1526dbe1ea603ca4c6591/MedMate",
});

const Profile = () => {
  const { auth, state } = useAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (state != null) {
      db.collection("User")
        .record(state?.userId)
        .onSnapshot(
          (newDoc) => {
            setUser(newDoc);
            console.log(newDoc);
          },
          (err) => {
            console.log(err);
          }
        );
    }
  }, [state]);

  return (
    <div>
      {state != null ? (
        <div>
          <span>Welcome, {state.userId}</span> <br />
          {user ? (
            <DisplayProfile
              name={user.data.name}
              age={user.data.age}
              gender={user.data.gender}
              bloodGrp={user.data.blood_group}
            />
          ) : (
            <Form />
          )}
        </div>
      ) : (
        <div>Please Connect your wallet.</div>
      )}
    </div>
  );
};

export default Profile;
