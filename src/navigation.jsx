import { Slideshow } from "./component/home/imageSlider"
import { FeaturedProduct } from "./component/product/featuredProduct"
import { Productsection } from "./component/product/product"


export const Navigation = ()=>{
    return(
        <>
          <Slideshow/>
          <FeaturedProduct/>
        </>
    )
}