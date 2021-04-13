import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllFiles,
  fetchFile,
  fetchPersonalFiles,
  fetchGeneralFiles,
} from "../redux/actions/fileActions";
import history from "../history";

export const useFiles = () => {
  const { userInfos, loading, error } = useSelector((state) => state.user);
  console.log(userInfos, loading, error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());

    if (error) {
      history.push({
        pathname: "/auth/login",
      });
    }
    s;
  }, [dispatch, error]);

  return [userInfos, loading];
};
