import { useNavigate } from "react-router-dom"
import { Price } from "../helper/convertcurrency"

export const ShowProduct = ({ product }) => {
    const navigate = useNavigate()
    const handlesingleproduct = (id)=>{
        navigate(`/products/${id}`)
    }
    return (
        <div className="flex md:flex-nowrap my-2 justify-center flex-wrap ">
            {product.map((item, index) => (
                    <li key={index} className="justify-evenly items-center mx-2 border hover:scale-105 cursor-pointer duration-200 rounded-md shadow-xl p-3 bg-[#cbccc0b6] " onClick={()=>handlesingleproduct(item.id)} >
                            <img src={item.image} alt="" className="h-[200px] " />
                            <h2 className="text-[20px] h-[12%] font-semibold cursor-pointer hover:text-blue-600 text-ellipsis overflow-hidden line-clamp-2 -webkit-box ">{item.name} </h2>
                            <h2 className="text-[18px] h-[10%] font-medium  " >{item.company.toUpperCase()} </h2>
                            <Price price={item.price} className="text-[18px] h-[10%]  " />                        
                    </li>
                ))
            }
        </div>
    )
} 