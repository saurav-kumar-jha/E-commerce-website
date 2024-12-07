import axios from "axios"
import { useEffect, useState } from "react"
import Loader from "../../loader";
import { useProductContext } from "../context/productContext";
import { Price } from "../helper/convertcurrency";
import { useNavigate } from "react-router-dom";

const API = "https://api.pujakaitem.com/api/products";
export const Productsection = () => {
    const navigate = useNavigate()
    const {isLoading, products } = useProductContext()

    const handleSinglePage = (id)=>{
        navigate(`/products/${id}`)
    }
    
    if(isLoading) return <Loader/>
    return (
        <>
          <h1 className="text-[32px] mx-2 " >Products:-</h1>
            <ul className="flex flex-wrap justify-center md:mx-4">
                {
                    products.map((index) => (
                        <li key={index.id} className="h-[auto]  hover:scale-105 overflow-hidden cursor-pointer duration-200 shadow-xl w-[300px] px-4 pt-4 border rounded bg-[#cbccc0b6] text-black  m-3 " onClick={()=>handleSinglePage(index.id)} >
                            <img src={index.image} alt="#" className="h-[65%] mb-1 w-[fit] mx-auto object-contain " />
                            <h1 className="text-[20px] h-[10%] font-semibold cursor-pointer hover:text-blue-600 text-ellipsis overflow-hidden line-clamp-2 -webkit-box " aria-valuemax={100}  >{index.name.toUpperCase()} </h1>
                            <h1 className="text-[18px] h-[8%]  font-medium my-2 "> <Price price={index.price} /> </h1>
                            <h1 className="text-[18px] h-[8%]  font-medium my-2 "> Brand: {index.company}/- </h1>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}