import axios from "axios";

function encrypt() {
  return "encryptedToken";
}

const AxiosClient = () => {
  var enc = encrypt();
  return axios.create({
    baseURL: "https://localhost:7244/api/",
    headers: {
      Authorization: enc,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
export async function readRequest(slug) {
  return await AxiosClient().get(slug);
}
