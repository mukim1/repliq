import { parseJwt } from "../../utility/parseJwt";

const getItem = (id: string) => localStorage.getItem(id);
const tokens = getItem("token") ? JSON.parse(getItem("token") || "") : null;

const { token, refresh_token } = tokens || {};

export const initialUserStates = {
  ...(tokens && parseJwt(token)),
  token,
  refresh_token,
} as User;

export type User = {
  email: string;
  exp: number;
  id: string;
  iss: string;
  refresh_token: string;
  token: string;
  user_type: string;
};
