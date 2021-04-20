import React, { useEffect, useState, useCallback } from "react";

import { fetchBackend } from "../services";

import { useHistory } from "react-router-dom";

const useAllUsers = () => {
  const history = useHistory();
  const [allUsers, setAllUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = useCallback(async () => {
    try {
      const { data } = await fetchBackend.get("/admin/users");
      setAllUsers(data);
      setLoading(false);
      setError(false);
    } catch (e) {
      if (
        e.response.status === 400 ||
        e.response.status === 401 ||
        e.response.status === 403
      ) {
        console.log(error);
        setLoading(false);
        setError(e.response.data);
      }
    }
  }, [setAllUsers, setLoading, setError]);

  return [allUsers, loading, error];
};

export default useAllUsers;
