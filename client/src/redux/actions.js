export const GET_CHARACTERS = "get_characters";
export const FILTER_CHARACTERS = "filter_characters";
export const CLEAN_INPUT = "clean_input";
export const SET_INPUT = "setInput";

export const get_characters = (data) => {
  return { type: GET_CHARACTERS, payload: data };
};
export const filter_characters = (data) => {
  return { type: FILTER_CHARACTERS, payload: data };
};
export const setInput = (data) => {
  return { type: SET_INPUT, payload: data };
};
export const clean_input = () => {
  return { type: CLEAN_INPUT };
};
