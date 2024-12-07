
const ProductReducer = (state, action) => {

    switch (action.type) {


        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            }

        case "GET_PRODUCTS":
            const featuredProduct = action.payload.filter((curElem) => {
                return curElem.featured === true
            })
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featuredProduct: featuredProduct
            }

        case "API_ERROR":
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        
            case "SET_SINGLE_LOADING":
                return {
                    ...state,
                    isSingleLoading: true,
                }
        case "SET_SINGLE_PRODUCT":
            return{
                ...state,
                isSingleLoading:true,
                singleProduct:action.payload
            }

            case "SINGLE_ERROR":
                return {
                    ...state,
                    isError: true,
                    isSingleLoading: false
                }
        default:
            return state;


    }

}

export default ProductReducer;