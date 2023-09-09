import Cookies from "js-cookie";
import axios from "axios";

// const token = Cookies.get('user_token')

export async function makeApiCall(
  url,
  method = "GET",
  data = {},
  contentType = "application/json",
  // headers = {
  //   'Content-Type': contentType,
  //   Authorization: `Bearer ${Cookies.get('user_token')}`,
  // },
  baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
) {
  try {
    const options = {
      method,
      url,
      // headers,
      baseURL,
      [method === "GET" ? "params" : "data"]: data,
    };

    if (contentType === "multipart/form-data") {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      options.data = formData;
    }

    const response = await axios(options);
    return response.data;
  } catch (error) {
    return error;
  }
}
