import { combineReducers } from "redux";
import { getCardsReducer } from "./getCards";
import { personDetailsReducer } from "./personDetailsReducer";

export const rootReducer = combineReducers({
  cards: getCardsReducer,
  infoPerson: personDetailsReducer,
});