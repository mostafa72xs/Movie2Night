import { useState, createContext ,useContext , useEffect } from "react";
import React from "react";

const PopupContext = createContext('')

const initialData = {}

const getSaveState = () => {
    const saveState = localStorage.getItem('pop');
    return saveState ? JSON.parse(saveState) : initialData;
}
export const PopupProvider = ({children}) =>{

    const [pop , setPop] = useState(getSaveState);  
    useEffect(()=>{
        localStorage.setItem('pop' , JSON.stringify(pop))
    },[pop])
    

    return <PopupContext.Provider value={[pop ,setPop]}> 
        {children}
    </PopupContext.Provider>
}

export const usePopup = () => useContext(PopupContext);
