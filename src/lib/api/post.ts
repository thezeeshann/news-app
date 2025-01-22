import { BASE_URL } from "../contant";
import { postType } from "../schema/post";

export const createPost = async (data: postType, token: string) => {
  try {
    const response = await fetch(`${BASE_URL}/post/create`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });

    console.log("Error Data:", await response.json());

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("create post API error:", error.message);
    throw error;
  }
};

export const getPost = async () => {
  try {
    const response = await fetch(`${BASE_URL}/post/get`, {
      method: "GET",
      headers: {
        "Content-type": "Application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("post API error:", error);
    throw error;
  }
};

export const getSinglePost = async (postId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/post/get-single/${postId}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("post API error:", error);
    throw error;
  }
};
