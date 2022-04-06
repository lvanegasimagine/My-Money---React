import { useState } from "react"
import { AuthContext } from "../context/AuthContext";
import { projectAuth } from "../firebase/config"
import { LOGIN } from "../types/Types";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (email, password, displayName) => {
        setError(false);
        setIsPending(true);

        try {
            const res = await projectAuth.createUserWithEmailAndPassword(email, password);
            if(!res){
                throw new Error('Could not complete signup');
            }
            await res.user.updateProfile({ displayName });

            // Dispatch login action
            dispatch({ type: LOGIN, payload: res.user });

            setIsPending(false);
            setError(null);

        } catch (error) {
            setError(error.message);
            setIsPending(false);
        }
    }

    return { signup, error, isPending}
}