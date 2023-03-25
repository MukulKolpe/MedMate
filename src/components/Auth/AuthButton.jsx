import React from "react";
import { useAuth } from "@polybase/react";

export default function AuthButton() {
  const { auth, state } = useAuth();

  return (
    <div>
      {state == null ? (
        <button onClick={() => auth.signIn()}>Sign In</button>
      ) : (
        <div>
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
      )}
    </div>
  );
}
