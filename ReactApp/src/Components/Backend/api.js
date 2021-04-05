import axios from "axios";
import cookies from "../State/cookies";
import Cookies from "../State/cookies";
import { fb_auth } from "../State/firebase";
import swal from 'sweetalert'
const baseUrl = process.env.REACT_APP_BASE_URL;
const {
  cookies: { readToken, create },
} = Cookies;
export const registerUser = async (payload, next) => {
  console.log("try payload -", payload);
  const result = await axios.post(`${baseUrl}/app/register`, payload);
  const { data } = result;
  if (data.status === "200") {
    create({ key: "token", value: data.token });
    next();
  }

  console.log("registered response =>", data);
};

export const getNewToken = async (uid) => {
  const result = axios.get(`${baseUrl}/app/new_token?uid=${uid}`);
  const { data } = await result;
  console.log("token get response", data);

  create({ key: "token", value: data.token });

  return;
};
export const sendFriendRequest = async(to) => {
  // const sendStatus = await axios.post(`${baseUrl}/app/api/addfriend?token=${readToken()}`, {user: to});
  //   const {data} = sendStatus;
  //     data.status == 200? swal("Sent!", "Friend Reqeust Sent!", "success") : swal("Uh Oh", "User doesn'tn exist", "error")
}
