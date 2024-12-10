import { Star } from "./start"


export const Review = ({url})=>{

    return(
        <>
        <h1 className="text-2xl font-semibold ">Customer Review:-</h1>
         {
            url.map((item,index)=>(
                <li key={index} className="list-none h-auto w-[90%] md:w-[80%] border border-black mx-auto py-2 px-3 my-4 rounded-lg shadow-2xl " >
                    <div className="flex gap-1 items-center "><img src="/user.png" alt="" className="h-[20px] w-[22px] rounded-full " /> <h1 className="text-base font-medium">{item.reviewerName} </h1> </div>
                    <p className="ml-6 mt-[-5px] text-[14px] ">{item.reviewerEmail}</p>
                    <p className="ml-6 mt-[-5px] text-[14px] ">Reviewes on {item.date}</p>
                    <div className="flex text-[#bb8219] ml-6 "> <Star star={item.rating}/></div>
                    <p className="ml-6 ">{item.comment} </p>
                </li>
            ))
         }
        </>
    )
}