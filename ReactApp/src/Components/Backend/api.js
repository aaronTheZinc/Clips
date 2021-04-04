import axios from "axios";
import cookies from "../State/cookies";
import Cookies from "../State/cookies";
import { fb_auth } from "../State/firebase";

const baseUrl = process.env.REACT_APP_BASE_URL
const {
  cookies: { readToken, create },
} = Cookies;
export const registerUser = async (payload) => {
  console.log("try payload -", payload);
  const result = await axios.post(`${baseUrl}/register`, payload);
  const { data } = result;
  if (data.status === "200") {
    create({ key: "token", value: data.token });
    window.open("/hub", "_self");
  }

  console.log("registered response =>", data);
};

export const getNewToken = async (uid) => {
  const result = axios.get(`${baseUrl}/app/new_token?uid=${uid}`);
  const { data } = await result;
  alert(data)
  console.log("token get response", data);

  create({ key: "token", value: data.token });
  return;
};
