import {
  GET_CHARACTERS,
  FILTER_CHARACTERS,
  CLEAN_INPUT,
  SET_INPUT,
} from "./actions";

const initialState = {
  characters: [],
  filterCharacters: [],
  input: "",
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHARACTERS: {
      return {
        ...state,
        characters: payload,
      };
    }
    case SET_INPUT: {
      return {
        ...state,
        input: payload,
      };
    }
    case FILTER_CHARACTERS: {
      return {
        ...state,
        filterCharacters: state.characters.filter(
          (e) => e.name.toLowerCase().search(payload) >= 0
        ),
        // ...state,
        // characters: state.characters.filter(
        //   (e) => e.name.toLowerCase() === payload.toLowerCase()
        // ),
      };
    }
    case CLEAN_INPUT: {
      return {
        ...state,
        input: "",
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
