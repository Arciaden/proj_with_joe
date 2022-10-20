import { createContext, useReducer } from "react";

export const ChecklistContext = createContext();

export const checklistReducer = (state, action) => {
    switch (action.type) {
        case "SET_CHECKLIST":
            return {
                checklist: action.payload,
            };
        case "CREATE_CHECKLIST":
            return {
                checklist: [action.payload, ...state.checklist]
            };
        case "DELETE_CHECKLIST":
            return {
                checklist: state.checklist.filter(
                    (list) => list._id !== action.payload._id
                ),  
            };
        default:
            return state;
    }
};

export const ChecklistContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(checklistReducer, { checklist: null })
    return (
        <ChecklistContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ChecklistContext.Provider>
    )
}