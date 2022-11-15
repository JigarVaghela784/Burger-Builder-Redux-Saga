import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};
export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId,
  };
};
export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const authLogout = () => {
  return {
    type: actionTypes.AUTH_INITIATE_LOGOUT,
  };
};

export const authLogoutSucceed = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return {
    type: actionTypes.AUTH_CHECK_TIMEOUT,
    expirationTime: expirationTime ,
  };
};

export const auth = (email, password, isSignup) => {
  return{
    type:actionTypes.AUTH_USERS,
    email:email,
    password:password,
    isSignup:isSignup
  }
};

export const setAuthNavigateToPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_NAVIGATE_PATH,
    path: path,
  };
};

export const authCheckState = () => {
  // return (dispatch) => {
    // const token = localStorage.getItem("token");
    // if (!token) {
    //   dispatch(authLogout());
    // } else {
    //   const expirationDate = new Date(localStorage.getItem("expirationDate"));
    //   if (expirationDate < new Date()) {
    //     dispatch(authLogout());
    //   } else {
    //     const userId = localStorage.getItem("userId");
    //     dispatch(authSuccess(token, userId));
    //     dispatch(
    //       checkAuthTimeout(
    //         (expirationDate.getTime() - new Date().getTime()) / 1000
    //       )
    //     );
    //   }
    // }
  // };
  return{
    type:actionTypes.AUTH_CHECK_STATE_DATA,
  }
};
