import { TCard, AppThunk } from "../types/types";

export const GET_CARDS_REQUEST: "GET_CARDS_REQUEST" = "GET_CARDS_REQUEST";
export const GET_CARDS_SUCCESS: "GET_CARDS_SUCCESS" = "GET_CARDS_SUCCESS";
export const GET_CARDS_FAILED: "GET_CARDS_FAILED" = "GET_CARDS_FAILED";
export const SELECT_PERSON: "SELECT_PERSON" = "SELECT_PERSON";
export const DELETE_INFO_PERSON: "DELETE_INFO_PERSON" = "DELETE_INFO_PERSON";

const url = "https://api.allorigins.win/raw?url=https://layout.solvintech.ru/nuxt/api/";

export type TGetCardsRequest = {
  readonly type: typeof GET_CARDS_REQUEST;
};

export type TGetCardsSuccess = {
  readonly type: typeof GET_CARDS_SUCCESS;
  data: TCardsResponse;
};

export type TGetCardsFailed = {
  readonly type: typeof GET_CARDS_FAILED;
  error: string;
};

export type TGetCardsActions =
  | TGetCardsRequest
  | TGetCardsSuccess
  | TGetCardsFailed;

export type TSelectPerson = {
  readonly type: typeof SELECT_PERSON;
  data: TCard;
};

export type TDeleteInfoPerson = {
  readonly type: typeof DELETE_INFO_PERSON;
};

export type TServerResponse<T> = {
  success: boolean;
} & T;

type TCardsResponse = TServerResponse<{
  data: TCard[] | null;
}>;

export const checkResponse = <T>(res: Response): Promise<T> => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(res);
  }
};

export const request = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  return checkResponse<T>(res);
};

export const getCards: AppThunk<void> = () => {
  return (dispatch) => {
    dispatch({
      type: GET_CARDS_REQUEST,
    });
    request<TCardsResponse>(url)
      .then((res) => {
        dispatch({
          type: GET_CARDS_SUCCESS,
          data: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_CARDS_FAILED,
          error: err.message,
        });
      });
  };
};

export const getDetailsPerson = (person: TCard): TSelectPerson => {
  return {
    type: SELECT_PERSON,
    data: person,
  };
};

export const deleteDetailsPerson = (): TDeleteInfoPerson => {
  return {
    type: DELETE_INFO_PERSON,
  };
};

export type TPersonDetailsActions = TSelectPerson | TDeleteInfoPerson;
