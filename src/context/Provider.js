import React, {createContext} from "react";
const Context = createContext()

function Provider({children}){
    return(
        <Context.Provider>
            {children}
        </Context.Provider>
    )
}

export default Provider