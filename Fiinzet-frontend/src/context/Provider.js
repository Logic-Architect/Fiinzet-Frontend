import React, {createContext, useState} from "react";
import { Context } from "../App";

function Provider({children}){

    const [phone , setPhone] = useState('123abc');
    const contextValue = {
        phone : phone,
        setPhone : setPhone
    }

    return(
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default Provider