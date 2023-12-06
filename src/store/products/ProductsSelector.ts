import {RootState} from "../rootReducer.ts";
import {ProductSelector} from "./types.ts";

export const productsSelector = (state: RootState): ProductSelector => ({
    products: state.productReducer.products,
    loading: state.productReducer.loading
})