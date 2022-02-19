import axios from "axios";
const baseURL = "https://apptesting.docsumo.com/api/v1/eevee/login";

export async function login(email: string, password: string) {
  return axios.post(
    baseURL,
    { email, password },
    {
      headers: {
        "Content-Type": "applicatiom/json"
      }
    }
  );
}
