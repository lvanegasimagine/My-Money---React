import { ADD_DOCUMENT, IS_PENDING, ERROR } from "../types/Types"

export const FirestoreReducer = (state, action) => {
    switch(action.type){
        case IS_PENDING: return {isPending: true, document: null, success: false, error: null};
        case ADD_DOCUMENT: return { isPending: false, document: action.payload, success: true, error: null};
        case ERROR: return { isPending: false, document: null, success: false, error: action.payload};
        default: return state
    }
}