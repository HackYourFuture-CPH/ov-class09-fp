const jwt = require("jsonwebtoken");
const jwtDecode = require("jwt-decode");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InN1cGVydXNlciIsIm9yZ2FuaXphdGlvbl9pZCI6MSwibmFtZSI6IkQnQW1vcmUsIE1pbGxlciBhbmQgS2VtbWVyIiwiaWF0IjoxNTcxMjU1MDkyLCJleHAiOjE1NzEyOTEwOTJ9.Ds_1ryeYw9Fv0cxdYAh1C2dVq8iZX9mFr6IobpEnQ-M";

const getTokenData = key => {
  const decodedToken = jwtDecode(token);

  return decodedToken[key];
};

export default getTokenData;
