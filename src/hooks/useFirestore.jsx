import { useReducer, useEffect, useState } from "react";
import { projectFirestore, timestamp } from "../firebase/config";
import { FirestoreReducer } from "../reducer/FirestoreReducer";
import { ADD_DOCUMENT, IS_PENDING, ERROR } from "../types/Types";

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

    // TODO: only dispatch is not cancelled

    const dispatchIfNotCancelled = (action) => {
        if(!isCancelled){
            dispatch(action);
        }
    }

    // TODO: add a document
    const addDocument = async (doc) => {
        dispatch({type: IS_PENDING});

        try {
            const createdAt = timestamp.fromDate(new Date());
            const addedDocument = await ref.add({...doc, createdAt});
            dispatchIfNotCancelled({type: ADD_DOCUMENT, payload: addedDocument});
        } catch (error) {
            dispatchIfNotCancelled({type: ERROR, payload: error.message});
        }
    }

    // TODO: delete a document
    const deletedDocument = (id) => {

    }

    useEffect(() => {
      return () => setIsCancelled(true);
    }, [])
    
    return { addDocument, deletedDocument, response };
}