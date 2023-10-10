import { ActionCreator, Action } from "redux";
import store from "../store";
import { ReactElement } from "react";
import { ThunkAction } from "redux-thunk";
import { TGetCardsActions } from "../actions";

export type TCard = {
  _id: string;
  index: number;
  picture: string;
  age: number;
  name: string;
  email: string;
  phone: string;
  about: string;
};

export type TModal = {
  children: ReactElement[] | ReactElement,
  onClosePopup: () => void,
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type TApplicationActions = TGetCardsActions;
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, RootState, Action, TApplicationActions>
>;
