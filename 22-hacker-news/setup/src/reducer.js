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
    case "THAY_DOI_SEARCH":
      return { ...state, searchQuery: payload.random };
    case HANDLE_SEARCH:
      return {
        ...state,
        searchQuery: payload.value,
      };
    default:
      return state;
  }
};
export default reducer;
