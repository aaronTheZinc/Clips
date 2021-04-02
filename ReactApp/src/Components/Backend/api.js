import axios from "axios";
import cookies from "../State/cookies";
import Cookies from "../State/cookies";
import { fb_auth } from "../State/firebase";
const baseUrl = "http://localhost:5000/app";
const {
  cookies: { readToken, create },
} = Cookies;
export const registerUser = async (payload) => {
  const result = await axios.post(`${baseUrl}/register`, payload);
  const { data } = result;
  if (data.status === "200") {
    create({ key: "token", value: data.token });
    window.open("/hub", "_self");
  }

  console.log("registered response =>", data);
};

export const getNewToken = async () => {
  const {uid} = fb_auth.currentUser
  const result = axios.get(`${baseUrl}/new_token?uid=${uid}`);
  const { data } = await result;
  create({ key: "token", value: data.token });
  return;
};
