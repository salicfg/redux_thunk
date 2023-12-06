// Define the todoReducer
import {ProductAction, ProductsActionTypes, ProductsState} from "./types.ts";

export const initialState: ProductsState = {
    products: [],
    loading: false,
    errorMessage: ''
};
const productReducer = (state: ProductsState = initialState, action: ProductAction): ProductsState => {
    switch (action.type) {
        case ProductsActionTypes.GET_PRODUCTS_PENDING:
            return {
                ...state,
                loading: true,
                errorMessage: '',
            };
        case ProductsActionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload?.products || [],
                loading: false
            };
        case ProductsActionTypes.GET_PRODUCTS_ERROR:
            return {
                ...state,
                errorMessage: action.payload?.errorMessage,
                loading: false
            };
        default:
            return state;
    }
};

export default productReducer;