import axios from "axios"
import { useEffect, useState } from "react"
import { Cart } from "./cart"
import { useCart } from "../context"

const API = "https://fakestoreapi.com/products"
const CARTS = "https://fakestoreapi.com/carts"
export const Productsection = () => {
    const [data, setdata] = useState()
    const [loading, setloading] = useState(true)
    const {cart, setcart} = useCart()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(API)
                 console.log(res.data)
                setdata(res.data)
                setloading(false)
            } catch {
                console.log("something went wrong in fetching api");
            }
        }
        fetchData()
    }, [])
    // console.log(data);
    const handleaddtocart = async (item)=>{
        // item.preventDefault()

        try {
            const res = await axios.post(CARTS,{
                productId: item.id,
                quantity:1
            })
            if(res.status == 200){
                alert("Successfully added")
            }else(
                alert("item not added")
            )
            
        } catch (error) {
            throw error;
        }

        
    }
    
    if (loading) return <div>Loading..</div>
    return (
        <>
          <h1 className="text-[32px] mx-2 " >Products:-</h1>
            <ul className="flex flex-wrap mx-4">
                {
                    data.map((index) => (
                        <li key={index.id} className="h-[auto] shadow-xl hover:scale-105 overflow-hidden cursor-default duration-150 w-[300px] px-4 pt-4 border rounded bg-[#ffffff] text-black border-black  m-3 ">
                            <img src={index.image} alt="#" className="h-[65%] mb-1 w-[90%] mx-auto object-contain " />
                            <h1 className="text-[20px] h-[12%] font-semibold cursor-pointer hover:text-blue-600 text-ellipsis overflow-hidden line-clamp-2 -webkit-box " aria-valuemax={100} >{index.title} </h1>
                            <h1 className="text-[18px] h-[8%]  font-medium "> Rs {index.price}/- </h1>
                            <button className="h-auto w-auto px-3 py-2 border border-blue-700 bg-blue-800 text-white text-[18px] font-medium rounded my-3 " onClick={()=>handleaddtocart(index)} >Add to Cart</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}