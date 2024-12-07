import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import Loader from "../../loader";
import { useNavigate } from "react-router-dom";


export const Cart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleAddbtn = ()=>{
    navigate("/products")
  }


  if (loading) return <div className="h-[80vh] w-[100vw] flex justify-center items-center text-black bg-[#b3b3b3] " ><Loader/></div>

  return (
    <div className="h-[100%] w-[90vw] mx-auto">
      <h1 className="text-[32px] mx-2">Cart:</h1>
      {data.length == 0 ? (
        <div>
        <p className="ml-6 text-xl font-medium " >Your cart is empty.</p>
        <button className="h-auto w-auto px-4 py-3 border border-transparent font-medium hover:scale-105 rounded-full bg-purple-800 text-white mt-5 ml-6 " onClick={handleAddbtn} >Add Product</button></div>)
      : 
        <ul>
          {data.map((cart, cartIndex) => (
            <div key={cartIndex}>
              {cart.products.map((item2, itemIndex) => (
                <li key={itemIndex} className="h-auto w-[60%] border my-2 border-black flex mx-auto px-4 py-2 bg-white" >
                  <img src={item2.image} alt="" className="h-[160px] w-fit mr-3" />
                  <div>
                    <p className="text-[20px] px-3 py-2 h-[30%] font-semibold cursor-pointer hover:text-blue-600 text-ellipsis overflow-hidden line-clamp-2 -webkit-box">{item2.title}</p>
                    <p className="h-[20%] mx-4 text-[18px] font-medium">Price: Rs {item2.productId}/-</p>
                    <div className="h-[20%] w-auto px-3 flex">
                      <label className="text-[18px] font-medium">Quantity:</label>
                      <div className="h-[100%] w-[100px] ml-3 bg-[yellow] rounded flex items-center">
                        <button onClick={() => decreaseQuantity(cartIndex, itemIndex)} className="h-[100%] w-[35%] bg-[#0000ffc5] text-[30px] rounded-l flex items-center justify-center font-bold">-</button>
                        <p className="w-[30%] flex items-center justify-center text-[16px] font-medium">{item2.quantity}</p>
                        <button onClick={() => increaseQuantity(cartIndex, itemIndex)} className="h-[100%] w-[35%] bg-[#0000ffc5] text-[20px] rounded-r" ><IoMdAdd /></button>
                      </div>
                    </div>
                  </div>
                  <button onClick={()=>handledeletecart(cart.id)} ><RiDeleteBin6Line /></button>
                </li>
              ))}
            </div>
          ))}
        </ul>
      }
    </div>
  );
};
