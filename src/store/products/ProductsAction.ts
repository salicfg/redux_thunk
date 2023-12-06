import {Product, ProductAction, ProductsActionTypes} from "./types.ts";

export const getProductsSuccess = (products: Product[]): ProductAction => {
    return  {
        type: ProductsActionTypes.GET_PRODUCTS_SUCCESS,
        payload: { products },
    };
}

export const getProductsError = (errorMessage: string): ProductAction => {
    return  {
        type: ProductsActionTypes.GET_PRODUCTS_ERROR,
        payload: { errorMessage },
    };
}

export const getProductsPending = (): ProductAction => {
    return  {
        type: ProductsActionTypes.GET_PRODUCTS_PENDING,
        payload: null,
    };
}