import { useReducer, useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";
import { FirestoreReducer } from "../reducer/FirestoreReducer";

let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}



export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(FirestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = useState(false);

    // TODO: collection ref
    const ref = projectFirestore.collection(collection);

    // TODO: add a document
    const addDocument = async (document) => {

    }

    // TODO: delete a document
    const deletedDocument = (id) => {

    }

    useEffect(() => {
      return () => setIsCancelled(true);
    }, [])
    
    return { addDocument, deletedDocument, response };
}