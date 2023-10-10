import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppDispatch, AppThunk, RootState } from "../services/types/types";

type DispatchFunc = () => AppDispatch | AppThunk;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: DispatchFunc = useDispatch;