import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export const Star = ({star})=>{

   const ratingStar= Array.from({length: 5},(elem,index)=>{
        let num = index + 0.5;
        return(
           <span key={index} className="flex">
            {
                star >= index +1 ? (<FaStar/>): star >= num ? (<FaStarHalfAlt/>): <AiOutlineStar/>
            }
           </span>
        )
    })
    return(
        ratingStar
    )
}