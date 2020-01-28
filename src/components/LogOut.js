import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/auth/AuthContext";

const LogOut = () => {
  const { signOut } = useContext(AuthContext);

  useEffect(() => {
    signOut();
  }, [signOut]);

  return <div></div>;
};

export default LogOut;
