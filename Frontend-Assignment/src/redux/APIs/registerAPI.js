import axios from "axios";
import { baseURL } from ".";

export const registerApi = async ({
  firstName,
  lastName,
  email,
  phoneNumber,
  dateOfBirth,
  gender,
  password,
}) => {
  try {
    const response = await axios.post(`${baseURL}/user`, {
      firstName,
      lastName,
      email,
      phoneNumber,
      dateOfBirth,
      gender,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.message || "An error occurred during register"
    );
  }
};
