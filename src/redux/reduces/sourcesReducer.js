import {
  SET_SOURCES,
  SET_SOURCES_STATE,
  SET_SOURCES_LOADING_STATUS,
} from '../actions/types';

const initialState = {
  sources: [],
  loading: false,
};

export default function sourcesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SOURCES:
      return {
        ...state,
        sources: action.payload,
      };
    case SET_SOURCES_STATE:
      return {
        ...state,
        sources: action.payload,
      };
    case SET_SOURCES_LOADING_STATUS:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
