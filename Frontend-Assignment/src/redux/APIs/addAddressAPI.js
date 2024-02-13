import axios from "axios";
import { baseURL } from ".";

export const addressApi = async ({
  userId,
  streetAddress,
  city,
  state,
  postalCode,
  country,
}) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token not found in local storage");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(
      `${baseURL}/address`,
      {
        userId,
        streetAddress,
        city,
        state,
        postalCode,
        country,
      },
      config
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.message || "An error occurred during adding Address"
    );
  }
};
