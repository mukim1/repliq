export const parseJwt = (token: any) => {
  try {
    // if (!token) return null;
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    console.log(e);
    return null;
  }
};
// const jwtDecode = (x: any) =>
// JSON.parse(Buffer.from(x.split(".")[1], "base64").toString());
