import { DELETE_INFO_PERSON, SELECT_PERSON, TPersonDetailsActions } from "../actions";
import { TCard } from "../types/types"

type TPersonDetailsState = {
  selectedPerson: {data: TCard | null},
}

const initialState: TPersonDetailsState = {
  selectedPerson: {data: null},
}

export const personDetailsReducer = (state = initialState, action: TPersonDetailsActions): TPersonDetailsState => {
  switch(action.type) {
    case SELECT_PERSON: {
      return {
        ...state,
        selectedPerson: {data: action.data}
      };
    }
    case DELETE_INFO_PERSON: {
      return {
        ...state,
        selectedPerson: {data: null},
      }
    }
    default: return state;
  }
}