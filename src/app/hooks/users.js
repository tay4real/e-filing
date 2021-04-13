import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers } from "../redux/actions/adminActions";
import { fetchUser } from "../redux/actions/userActions";
import history from "../history";

export const useAuth = () => {
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
  }, [dispatch, error]);

  return [userInfos, loading];
};

export const useAllUsers = () => {
  const { allUsers, loading, error } = useSelector((state) => state.admin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
    if (error) {
      console.log(error);
    }
  }, [dispatch, error]);

  return [allUsers, loading, error];
};

export default useAllUsers;
