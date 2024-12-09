import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useProductContext } from "../context/productContext";
import Loader from "../../loader";
import { Star } from "./start";
import { Icons } from "./icon";
import { TbTruckDelivery } from "react-icons/tb";
import { GrShieldSecurity } from "react-icons/gr";
import { MdOutlineEventAvailable, MdOutlineReplay } from "react-icons/md";
import { QuantityBtn } from "./quantitybtn";
import { Review } from "./review";


const API = "https://dummyjson.com/products";

export const SingleProduct = () => {
  const { id } = useParams()
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext()


  useEffect(() => {
    if (getSingleProduct) {
      getSingleProduct(`${API}/${id}`)
    }
  }, [])

  const item = singleProduct
  if (singleProduct) {
    if (isSingleLoading) return <Loader />
  }
  return (
    <>
      <div>
        <h1 className="text-lg mx-2 my-3 text-red-600 "><NavLink to="/" >home</NavLink>/<NavLink to="/products">product</NavLink>/<NavLink>{item.title}</NavLink>  </h1>
        <section className="h-auto w-[80vw] mx-auto md:flex block md:justify-between " >
          <div className=" md:w-[48%] w-[80vw] mx-auto md:h-[100vh] h-[300px] " >
            <img src={item.images} alt="" className="md:h-[400px] h-[90%] w-fit md:w-[90%] mx-auto " />
          </div>
          <div className="border h-auto py-4 px-2 md:w-[50%] w-[80vw] mx-auto " >
            <h1 className="md:text-2xl text-xl my-1 h-[auto] font-semibold cursor-pointer hover:text-blue-600 text-ellipsis overflow-hidden  -webkit-box ">{item.title} {item.description} </h1>
            <p className="flex text-[#ffa600] my-1 ml-2 md:text-xl text-lg cursor-pointer ">
              <Star star={item.rating} title={item.rating} /><span className="text-black text-base ">(  {item.rating} rating )</span>
            </p>
            <p className="text-xl font-bold " >{item.availabilityStatus}</p>
            <p className="text-xl">In Stock: {item.stock}</p>
            <p className="text-xl">Minimum Order: {item.minimumOrderQuantity} items</p>
            <hr className="h-[2px] w-[100%] mx-auto bg-slate-500 my-2 " />


            <p className="h-auto w-fit px-2 py-1 bg-yellow-600 border border-yellow-600 text-sm font-semibold text-white rounded-md  ">Limited Time Deal</p>
            <p className="text-2xl text-red-600">-{item.discountPercentage}% <sup className="text-black">$ </sup><span className="text-3xl text-black font-semibold ">{item.price}/- </span> </p>
            <p className="text-xl font-semibold ">MRP : <span className="line-through ">{(item.discountPercentage) / 100 + item.price}</span> </p>
            <QuantityBtn className="h-[30px] w-[80%] " />
            <h2 className="flex w-[90%] gap-2 ">
              {item.tags && item.tags.length > 0 && (
                <h2 className="flex w-[90%] gap-2">
                  {item.tags[0] && <p className="h-auto w-fit backdrop-blur-md bg-slate-500 rounded-md px-2 text-white text-lg my-1 ">#{item.tags[0]}</p>}
                  {item.tags[1] && <p className="h-auto w-fit backdrop-blur-md bg-slate-500 rounded-md px-2 text-white text-lg my-1 ">#{item.tags[1]}</p>}
                </h2>
              )}

            </h2>
            <hr className="h-[2px] w-[100%] mx-auto bg-slate-500 my-2" />
            <div className="flex ">
              <Icons name={item.shippingInformation} icon={<TbTruckDelivery />} />
              <Icons name={item.warrantyInformation} icon={<GrShieldSecurity/>}/>
              <Icons name={item.availabilityStatus} icon={<MdOutlineEventAvailable/>}/>
              <Icons name={item.returnPolicy} icon={<MdOutlineReplay/>}/>
            </div>
            <hr className="h-[2px] w-[100%] mx-auto bg-slate-500 my-2" />
            <button className="h-auto w-[50%] bg-yellow-600 py-2 px-4 text-xl font-semibold rounded-full text-white " >Buy now</button>
            <button className="h-auto w-[50%] bg-yellow-600 py-2 px-4 text-xl font-semibold rounded-full text-white " >Add to cart</button>


            <hr className="h-[2px] w-[100%] mx-auto bg-slate-500 my-2 " />
            <h1 className="text-xl mt-3 mb-2">Product Description:</h1>
            <div className=" w-[95%] mx-auto ">
              <p className="text-lg font-medium" ><span className="text-[20px] font-semibold">Brand:</span> {item.brand} </p>
              <p className="text-lg font-medium" ><span className="text-lg font-semibold">Category:</span> {item.category} </p>
              <p className="text-lg font-medium" ><span className="text-lg font-semibold">Product Id:</span> {item.sku} </p>
              <p className="text-lg font-medium" ><span className="text-lg font-semibold">Weight:</span> {item.weight} </p>
              <p className="text-lg font-medium" ><span className="text-lg font-semibold">Dimesion:</span>{item.dimesions  && item.dimesions.length > 0 && (item.dimensions.height * item.dimensions.width * item.dimensions.depth )} </p>
            </div>
            <hr className="h-[2px] w-[100%] mx-auto bg-slate-500 my-2 " />

          </div>
        </section>
        <div className=" w-[80vw] h-auto my-8 mx-auto ">
          {/* <Review url={item.reviews}/> */}
        </div>

      </div>
    </>
  )
}