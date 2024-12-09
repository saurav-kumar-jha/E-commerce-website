import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer"


const Appcontext = createContext()
const API = "https://dummyjson.com/products"

const initialState = {
    isLoading:false,
    isError:false,
    products:[],
    isSingleLoading:false,
    singleProduct:{},
    cart:{}
}

const AppProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState)
    const getProvider = async (url)=>{
        dispatch({type:"SET_LOADING"})
        try {
            const res = await axios.get(url)
            const products = res.data 
                  
            dispatch({type:"GET_PRODUCTS" , payload: products}) 
        } catch (error) {
            dispatch({type:"API_ERROR"})
        }
    }

    const getSingleProduct = async (url)=>{
        dispatch({type:"SET_SINGLE_LOADING"})
        try {
            const res = await axios.get(url)
            const SingleProduct = res.data 
            // console.log(SingleProduct);
                  
            dispatch({type:"SET_SINGLE_PRODUCTS" , payload: SingleProduct})
        } catch (error) {
            dispatch({type:"SINGLE_ERROR"})
        }
    }

    const getProductCart = async (url)=>{
        dispatch({type:"SET_LOADING"})
        try {
            const res = await axios.get(url)
            const Cart = res.data
            console.log(Cart);            
            dispatch({type:"SET_CART", payload:Cart})
        } catch (error) {
            dispatch({type:"API_ERROR"})
        }
    }
    useEffect(()=>{
        getProvider(API)
    },[])
    return(
        <Appcontext.Provider value={{...state,getSingleProduct,getProductCart}}>
            {children}
        </Appcontext.Provider>
    )
}

const useProductContext = ()=>{
    return useContext(Appcontext)
}

export {AppProvider, Appcontext, useProductContext}