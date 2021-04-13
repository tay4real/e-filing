import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../redux/actions/userActions";
import history from "../history";

const useMails = () => {
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

export default useAuth;
