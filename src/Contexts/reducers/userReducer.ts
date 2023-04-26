import { parseJwt } from "../../utility/parseJwt";

export default (state: any, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_USER":
      const { token, refresh_token } = payload;
      localStorage.setItem("token", JSON.stringify(payload));
      return {
        ...parseJwt(token),
        token,
        refresh_token,
      };
    case "REMOVE_USER":
      localStorage.clear();
      return { state: null };
    default:
      return state;
  }
};
