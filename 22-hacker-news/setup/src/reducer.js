import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const checkNumber = (num, min, max) => {
  if (num < min) {
    return max - 1;
  }
  if (num > max - 1) {
    return min;
  }
  return num;
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        news: payload.news,
        nbPages: payload.nbPages,
      };
    case "THAY_DOI_SEARCH":
      return { ...state, searchQuery: payload.random };
    case HANDLE_SEARCH:
      return {
        ...state,
        searchQuery: payload.value,
      };
    case HANDLE_PAGE:
      let newPage;
      if (payload.checkPrevBtn) {
        newPage = state.page - 1;
      } else {
        newPage = state.page + 1;
      }
      return {
        ...state,
        page: checkNumber(newPage, 0, state.nbPages),
      };
    case REMOVE_STORY:
      let newNews = state.news.filter((item) => item.objectID !== payload.id);
      console.log(
        "🚀TCL: ~ file: reducer.js ~ line 50 ~ reducer ~ newNews",
        newNews
      );
      return {
        ...state,
        news: newNews,
      };
    default:
      // return state;
      throw new Error(`no matching "${type}" action`);
  }
};
export default reducer;
