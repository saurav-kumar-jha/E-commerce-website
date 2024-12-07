import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productContext";
import { Errorpage } from "../errorpage";


const API = "https://api.pujakaitem.com/api/products";

export const SingleProduct = ()=>{
    const {id} = useParams()
    const {getSingleProduct,isSingleLoading, singleProduct} = useProductContext()
    
    
    useEffect(()=>{
        getSingleProduct(`${API}?id=${id}`)
    },[])
    console.log(singleProduct);
    
    return(
        <>
          <div>
            <h1 className="text-[32px] mx-2 ">Single Page:-</h1>
          
          </div>
        </>
    )
}