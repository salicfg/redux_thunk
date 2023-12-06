import {Dispatch} from "redux";
import {AxiosError, AxiosResponse} from 'axios'

import {getProductsError, getProductsPending, getProductsSuccess} from "./ProductsAction.ts";
import api from "../../api";
import {Product} from "./types.ts";

export const getProductsThunk = () => {
  return async (dispatch: Dispatch) => {
      dispatch(getProductsPending());
      try {
          const response = await api.get<void, AxiosResponse<Product[]>>('/products');
          dispatch(getProductsSuccess(response.data))
      } catch (e: unknown) {
          const error = e as AxiosError
          dispatch(getProductsError(error?.message || ''))
      }
  }
}