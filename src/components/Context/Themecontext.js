import { useState, createContext ,useContext } from "react";
import React from "react";

const PopupContext = createContext(undefined)


export const PopupProvider = ({children}) =>{

    const [pop , setPop] = useState(false);  

    

    return <PopupContext.Provider value={[pop ,setPop]}> 
        {children}
    </PopupContext.Provider>
}

export const usePopup = () => useContext(PopupContext);
