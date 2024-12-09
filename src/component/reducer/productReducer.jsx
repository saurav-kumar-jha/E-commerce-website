
const ProductReducer = (state, action) => {

    switch (action.type) {


        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            }

        case "GET_PRODUCTS":
            return {
                ...state,
                isLoading: false,
                products: action.payload
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
        case "SET_SINGLE_PRODUCTS":
            return{
                ...state,
                isSingleLoading:false,
                singleProduct:action.payload
            }

            case "SINGLE_ERROR":
                return {
                    ...state,
                    isError: true,
                    isSingleLoading: false
                }
            case "SET_CART":
                return{
                    ...state,
                    isLoading:false,
                    cart:action.payload
                }
        default:
            return state;


    }

}

export default ProductReducer;