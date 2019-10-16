const jwt = require("jsonwebtoken");
const jwtDecode = require("jwt-decode");

//const token = localStorage.getItem("token");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InN1cGVydXNlciIsIm9yZ2FuaXphdGlvbl9pZCI6MSwibmFtZSI6IkQnQW1vcmUsIE1pbGxlciBhbmQgS2VtbWVyIiwiaWF0IjoxNTcxMjU1MDkyLCJleHAiOjE1NzEyOTEwOTJ9.Ds_1ryeYw9Fv0cxdYAh1C2dVq8iZX9mFr6IobpEnQ-M";
console.log(token);

const decodedToken = jwtDecode(token);
console.log(decodedToken);

const getTokenData = key => {
  const organization_id = key.organization_id;
  const id = key.id;
  const role = key.role;
  const name = key.name;

  return organization_id, id, role, name;
};
getTokenData(decodedToken);
