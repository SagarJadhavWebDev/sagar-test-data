export const CHANGEPAGE = "CHANGEPAGE";
export const GET_CURRENT_PAGE = " GET_CURRENT_PAGE";
export const GET_TOTAL_PAGE = "GET_TOTAL_PAGE";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_PAGE = "SET_TOTAL_PAGE";
export const GET_MAX_PAGE = "GET_MAX_PAGE";
export const SET_MAX_PAGE = "SET_MAX_PAGE";
export const SET_VIEW_TYPE = "SET_VIEW_TYPE";
export const SET_SIDEBAR_OPEN = "SET_SIDEBAR_OPEN";
export const SET_PER_PAGE = "SET_PER_PAGE";

export const changePage = (payload) => ({
  type: CHANGEPAGE,
  payload: payload,
});

export const setCurrentPage = (payload) => ({
  type: SET_CURRENT_PAGE,
  payload: payload,
});

export const setTotalPage = (payload) => ({
  type: SET_TOTAL_PAGE,
  payload: payload,
});

export const setMaxPage = (payload) => ({
  type: SET_MAX_PAGE,
  payload: payload,
});

export const setViewtype = (payload) => ({
  type: SET_VIEW_TYPE,
  payload: payload,
});

export const setSidebarOpen = (payload) => ({
  type: SET_SIDEBAR_OPEN,
  payload: payload,
});

export const setPerPage = (payload) => ({
  type: SET_PER_PAGE,
  payload: payload,
});
