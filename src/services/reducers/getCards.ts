import {
  GET_CARDS_FAILED,
  GET_CARDS_REQUEST,
  GET_CARDS_SUCCESS,
  TGetCardsActions,
} from "../actions";
import { TCard } from "../types/types";

type TGetCardsState = {
  // data: Array<TCard> | null;
  data: any,
  loading: boolean;
};

const initialState: TGetCardsState = {
  data: [],
  loading: false,
};

export const getCardsReducer = (
  state = initialState,
  action: TGetCardsActions
): TGetCardsState => {
  switch (action.type) {
    case GET_CARDS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_CARDS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    }
    case GET_CARDS_FAILED: {
      return {
        ...state,
        loading: false,
        data: state.data,
      };
    }
    default:
      return state;
  }
};
