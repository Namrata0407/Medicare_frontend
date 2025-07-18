import axios from "axios";

export const authLoginAPI = async (payload) => {
  const res = await axios.post(
    `${process.env.REACT_APP_BASEURL}/auth/login`,
    payload
  );
  return res.data;
};
