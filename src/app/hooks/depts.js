import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllDepartments } from "../redux/actions/deptActions";

export const useDepts = () => {
  const { departments, loading, error } = useSelector((state) => state.depts);
  console.log(departments, loading, error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllDepartments());
    if (error) {
      console.log(error);
    }
  }, [dispatch, error]);

  return [departments, loading, error];
};
