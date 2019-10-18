const jwtDecode = require("jwt-decode");

export const getAuthToken = () => localStorage.getItem("token");

export const getTokenData = key => {
  const decodedToken = jwtDecode(getAuthToken());

  if (decodedToken) {
    return decodedToken[key];
  } else {
    return null;
  }
};
