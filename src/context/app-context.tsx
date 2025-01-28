import { createContext, PropsWithChildren, useState, useEffect } from "react";
import { getPost } from "../lib/api/post";
import { getComments } from "../lib/api/comment";
import { getDataFromStore } from "../lib/store";
import { SignUpType } from "../lib/types";

type AppContextProp = {
  postData: any;
  setPostData: (data: any) => void;
  comments: any;
  setComments: (data: any) => void;
  userData: SignUpType | null;
  setUserData: (data: SignUpType | null) => void;
};

export const AppContext = createContext<AppContextProp>({
  postData: null,
  setPostData: () => {},
  comments: null,
  setComments: () => {},
  userData: null,
  setUserData: () => {},
});

export default function AppContextProvider({ children }: PropsWithChildren) {
  const [postData, setPostData] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [userData, setUserData] = useState<SignUpType | null>(null);

  const fetchPostData = async () => {
    try {
      const data = await getPost();
      setPostData(data);
    } catch (error) {
      console.log("something went wrong while fetching post data", error);
    }
  };

  const fetchComments = async () => {
    try {
      const data = await getComments();
      setComments(data);
    } catch (error) {
      console.log("something went wrong while fetching comment data", error);
    }
  };

  const fetchUserDataFromAsyncStorage = async () => {
    try {
      const token = await getDataFromStore("authToken");
      const existUser = await getDataFromStore("existUser");
      if (token && existUser) {
        setUserData({ token, existUser });
      } else {
        setUserData(null);
      }
    } catch (error) {
      console.error("Error fetching user data from AsyncStorage", error);
    }
  };

  useEffect(() => {
    fetchPostData();
    fetchComments();
    fetchUserDataFromAsyncStorage();
  }, []);

  return (
    <AppContext.Provider
      value={{
        postData,
        setPostData,
        comments,
        setComments,
        userData,
        setUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
