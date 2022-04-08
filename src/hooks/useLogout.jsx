import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { LOGOUT } from "../types/Types";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      await projectAuth.signOut();
      dispatch({ type: LOGOUT });
      setIsPending(false);
      setError(null);
    } catch (error) {
      console.log(error);
      setError(error);
      setIsPending(false);
    }
  };

  return { logout, error, isPending };
};
