import Loader from "../../loader"
import { useProductContext } from "../context/productContext"
import { ShowProduct } from "./showproduct"


export const FeaturedProduct = () => {

    const { isLoading, featuredProduct } = useProductContext()

    return (
        <>
            {isLoading ? <Loader className="flex justify-center items-center" /> :
                (
                    <div className="h-auto w-[80vw] border px-4 my-4 shadow-2xl py-4 mx-auto">
                        <h2 className="text-[28px] mx-2 font-semibold " >Check our new Products:-</h2>
                        <ul className="h-auto border flex px-4 my-4 ml-3 py-4 mx-auto " >
                         <div className="h-auto w-[auto] px-3 py-2 " >
                            <ul className="flex">
                                <ShowProduct product={featuredProduct}  />
                            </ul>                        
                             </div>
                         </ul>
                    </div>
                )
            }
        </>
    )
}