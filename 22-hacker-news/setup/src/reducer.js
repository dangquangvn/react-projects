import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return { ...state, isLoading: false, news: payload.news };
    default:
      return state;
  }
};
export default reducer;
