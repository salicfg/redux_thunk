// Use throughout your app instead of plain `useDispatch` according to official documentation
import {ThunkDispatchType} from "../store";
import {useDispatch} from "react-redux";

export const useThunkDispatch = () => useDispatch<ThunkDispatchType>();