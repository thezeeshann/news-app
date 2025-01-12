import { BASE_URL } from "../contant";
import { signupType } from "../schema/signup";
import { signinType } from "../schema/signin";

export const signup = async (data: signupType) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Signup API error:", error);
    throw error;
  }
};

export const signin = async (data: signinType) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("success message", response);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Signup API error:", error);
    throw error;
  }
};
