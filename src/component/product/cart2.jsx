import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import axios from "axios";
import { RiDeleteBin6Line, RiSubtractFill } from "react-icons/ri";
import Loader from "../../loader";
import { useNavigate, useParams } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

const API = "https://dummyjson.com/carts";
export const Cart = () => {
  const navigate = useNavigate()
  const [Loading, setloading] = useState(false)
  const [data, setdata] = useState([])
  const [totalAmount, settotalAmount] = useState(0)
  const [TotalAmount, settotalAmnt] = useState(0)

  useEffect(() => {
    setloading(true)
    const getData = async () => {
      const res = await axios.get(API)
      const product = res.data
      console.log(product.carts);
      setdata(product.carts)
      setloading(false)


      const total = product.carts.reduce((acc, item) => acc + item.total, 0);
      settotalAmount(total);

      const TotalAnt = product.carts.reduce((acc, item) => acc + item.discountedTotal, 0)
      settotalAmnt(TotalAnt)

    }
    getData()
  }, [])

  const discountedPrice = totalAmount - TotalAmount
  const discountPercentage = ((discountedPrice) / totalAmount) * 100
  console.log(discountPercentage);

  const handleDelete = async (id) => {
    const res = await axios.delete(`${API}/${id}`)
    console.log(res);

  }
  const handleAddbtn = () => {
    navigate("/products")
  }


  if (Loading) return <div className="h-[80vh] w-[100vw] flex justify-center items-center text-black bg-[#b3b3b3] " ><Loader /></div>


  return (
    <>
      <div className="h-[100%] w-[90vw] flex justify-evenly  mx-auto">
        <h1 className="text-[32px] mx-2">Cart:</h1>
        {data.length == 0 ? (
          <div>
            <p className="ml-6 text-xl font-medium " >Your cart is empty.</p>
            <button className="h-auto w-auto px-4 py-3 border border-transparent font-medium hover:scale-105 rounded-full bg-purple-800 text-white mt-5 ml-6 " onClick={handleAddbtn} >Add Product</button></div>)
          :
          <ul className="w-[70%] ">
            {data.map((cart, cartIndex) => (
              <div key={cartIndex} >
                {cart.products.map((item2, itemIndex) => (
                  <li key={itemIndex} className="h-auto w-[70%] border my-2 border-black flex justify-evenly mx-auto px-4 py-2 shadow-2xl rounded-lg bg-[#ffffff50]" >
                    <img src={item2.thumbnail} alt="" className="h-[150px] w-[40%] mr-3" />
                    <div className="h-auto w-[55%]">
                      <p className="text-[20px] px-3 py-2 h-[auto] font-semibold cursor-pointer hover:text-blue-600 text-ellipsis overflow-hidden line-clamp-2 -webkit-box">{item2.title}</p>
                      <p className="text-lg ml-3 text-red-600">-{item2.discountPercentage}% <sup className="text-black">Rs </sup><span className="text-xl text-black font-medium  ">{item2.price}/- </span> </p>
                      <p className="text-base font-medium ml-3 max-w-xs "  >MRP : <span className="line-through ">{((item2.discountPercentage) / 100 + item2.price).toFixed(2)}</span> </p>
                      <div className="h-[20%] w-auto px-3 flex">
                        <label className="text-[18px] font-medium">Quantity:</label>
                        <div className="h-[40px] w-[100px] ml-3 bg-slate-400 rounded flex items-center">
                          <button onClick={() => decreaseQuantity(cartIndex, itemIndex)} className="h-[100%] w-[35%] rounded-l-md bg-[#918f8c] flex justify-center items-center text-xl "><RiSubtractFill /></button>
                          <p className="w-[30%] flex items-center justify-center text-[16px] font-medium">{item2.quantity}</p>
                          <button onClick={() => increaseQuantity(cartIndex, itemIndex)} className="h-[100%] w-[35%] rounded-r-md bg-[#918f8c] flex justify-center items-center text-xl " ><IoMdAdd /></button>
                        </div>
                      </div>
                      <div className="flex " >
                        <button className="h-auto w-[35%] bg-yellow-600 py-1 px-2 text-lg m-2 font-semibold rounded-full text-white ">Buy now</button>
                        <button className="h-auto w-[35%] flex items-center justify-center bg-red-600 py-1 px-2 text-lg m-2 font-semibold rounded-full text-white " onClick={() => handleDelete(item2.id)} > <MdDeleteOutline /> Remove </button>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
            ))}
          </ul>
        }
        <div className="h-[auto] w-[30%] bg-[#f8de8705] ">
          <div className="h-[33vh] w-[100%] border border-black shadow-2xl px-3 py-2 mt-4 rounded-lg backdrop-blur-md bg-[#f8de8705] ">
            <h1 className="text-2xl font-bold my-2 ">Checkout </h1>
            <h1 className="text-xl font-semibold ml-1 ">Total item:- {data.length} items</h1>
            <h1 className="text-xl font-semibold ml-1 ">Total Rate:- {totalAmount}</h1>
            <h1 className="text-xl font-semibold ml-1">Total discount:- <span className="text-lg text-red-600"> -{(discountPercentage).toFixed(2)}%</span> </h1>
            <h1 className="text-xl font-semibold ml-1 ">Total Price:-{(TotalAmount).toFixed(2)} </h1>
            <button className="h-auto w-[50%] bg-yellow-600 py-1 px-2 text-lg m-2 font-semibold rounded-full text-white ">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};
