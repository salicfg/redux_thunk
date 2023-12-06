import {Action} from "redux";

export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
};

// Define actions related to the products
export enum ProductsActionTypes {
    GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR',
    GET_PRODUCTS_PENDING = 'GET_PRODUCTS_PENDING',
}

// Define action creators
type GetProductsAction =
    Action<ProductsActionTypes.GET_PRODUCTS_SUCCESS | ProductsActionTypes.GET_PRODUCTS_ERROR | ProductsActionTypes.GET_PRODUCTS_PENDING>
    & {
    payload: { products?: Product[], errorMessage?: string } | null;
};

export type ProductAction = GetProductsAction;

// Define the initial state
export type ProductsState = {
    products: Product[];
    loading: boolean;
    errorMessage?: string
};

export type ProductSelector = {
    products: Product[];
    loading: boolean;
}