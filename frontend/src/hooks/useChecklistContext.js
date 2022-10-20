import { ChecklistContext } from "../context/ChecklistContext";
import { useContext } from "react";

export const useChecklistContext = () => {
    const context = useContext(ChecklistContext)

    if (!context) {
        throw Error(
            "Bad things are about to happen"
        )
    }
    return context;
}