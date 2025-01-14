import { createContext, PropsWithChildren, useState, useEffect } from "react";
import { getPost } from "../lib/api/post";
import { getComments } from "../lib/api/comment";

type AppContextProp = {
  postData: any;
  setPostData: (data: any) => void;
  comments: any;
  setComments: (data: any) => void;
};

export const AppContext = createContext<AppContextProp>({
  postData: null,
  setPostData: () => {},
  comments: null,
  setComments: () => {},
});

export default function AppContextProvider({ children }: PropsWithChildren) {
  const [postData, setPostData] = useState();
  const [comments, setComments] = useState([]);

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

  useEffect(() => {
    fetchPostData();
    fetchComments();
  }, []);

  return (
    <AppContext.Provider
      value={{
        postData,
        setPostData,
        comments,
        setComments,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
