import { useState } from "react"
import { projectAuth } from "../firebase/config"

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const signup = async (email, password, displayName) => {
        setError(false);
        setIsPending(true);

        try {
            const res = await projectAuth.createUserWithEmailAndPassword(email, password);
            console.log(res.user);
            if(!res){
                throw new Error('Could not complete signup');
            }
            await res.user.updateProfile({ displayName });

            setIsPending(false);
            setError(null);

        } catch (error) {
            setError(error.message);
            setIsPending(false);
        }
    }

    return { signup, error, isPending}
}