import axios from "axios"
import { useEffect, useState } from "react"
import Loader from "../../loader";
import { useProductContext } from "../context/productContext";
import { Price } from "../helper/convertcurrency";
import { useNavigate } from "react-router-dom";

const API = "https://dummyjson.com/products";
export const Productsection = () => {
    const navigate = useNavigate()
    const { isLoading, products, getProductCart } = useProductContext()


    const productsList = products?.products || []
    // console.log(productsList);
    const handleSinglePage = (id) => {
        navigate(`/products/${id}`)
    }
    
    const setCart = useEffect((id)=>{
        if(getProductCart){
            getProductCart(`${API}/${id}`)
        }
    },[])
    const handleAddCart = (id)=>{
        setCart(id)
        if(setCart)
            alert("added to cart")
    }
    if (isLoading) return <Loader />
    return (
        <>
            <h1 className="text-[32px] mx-2 " >Products:-</h1>
            <ul className="flex flex-wrap  mx-auto w-[80vw] justify-center md:mx-auto">
                {
                    productsList.map((index) => (
                        <li key={index.id} className="h-[auto] min-h-[300px] max-h-[400px] flex hover:scale-105 overflow-hidden cursor-pointer duration-200 shadow-xl w-[70%] px-4 pt-4 border rounded bg-[#cbccc0b6] text-black  m-3 justify-between "  >
                            <img src={index.images[0]} alt="#" className="h-[250px]  mb-1 w-[50%] object-contain " onClick={() => handleSinglePage(index.id)} />
                            <div className="w-[48%]  h-[90%] py-2 px-3 ">
                                <h1 className="text-2xl my-1 h-[auto] font-semibold cursor-pointer hover:text-blue-600 text-ellipsis overflow-hidden line-clamp-2 -webkit-box " aria-valuemax={100} onClick={() => handleSinglePage(index.id)} >{index.title.toUpperCase()} </h1>
                                <h1 className="text-[18px] h-[auto] my-1 font-medium "> <sup>Rs</sup><span className="text-3xl " >{index.price}</span> </h1>
                                <p className="mt-[-6px] text-[14px] my-1 ">( {index.discountPercentage}% off )</p>
                                <h1 className="text-[18px] h-[auto] my-1 font-medium"> Brand: {index.brand} </h1>
                                <h2 className={`${index.stock > 3 ? "text-black" : "text-red-600"} my-1`} >Only {index.stock} in Stock. </h2>
                                <button className="bg-[#b9b911] h-[auto] w-[auto] px-4 py-2 border border-transparent text-lg font-semibold hover:scale-105 duration-100 rounded-full " onClick={() => handleAddCart(index.id)} >Add to cart</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}