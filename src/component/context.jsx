import { createContext, useContext, useState } from "react";


const Cartcontext = createContext()


export const useCart = ()=>{
    return useContext(Cartcontext)
}

export const Cartprovider = ({children})=>{
    const [cart, setcart] = useState([])

    return(
        <Cartcontext.Provider value={{cart, setcart}}>
            {children}
        </Cartcontext.Provider>
    )
}