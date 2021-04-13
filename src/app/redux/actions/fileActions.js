import { fetchBackend } from "../../services";
import { file_action_types as c } from "./constants";

export function setFiles(files) {
  return (dispatch) => {
    dispatch({
      type: c.SET_FILES,
      payload: files,
    });
  };
}

export function setFile(file) {
  return (dispatch) => {
    dispatch({
      type: c.SET_FILE_DETAIL,
      payload: file,
    });
  };
}

export function setError(error) {
  return (dispatch) => {
    dispatch({
      type: c.SET_ERROR_OPERATION,
      payload: error,
    });
  };
}

export function setSuccess(message) {
  return (dispatch) => {
    dispatch({
      type: c.SET_SUCCESS_OPERATION,
      payload: message,
    });
  };
}

export function fetchAllFiles() {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.get("/files");
      dispatch(setFiles(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function fetchPersonalFiles() {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.get("/files/personalfiles");
      dispatch(setFiles(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function fetchGeneralFiles() {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.get("/files/generalfiles");
      dispatch(setFiles(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function fetchFileById(id) {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.get(`/files/${id}`);

      dispatch(setFile(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function addNewFile(data) {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.post("/files/newfile", data);
      if (res.data) {
        dispatch(setMessage("File added successfully"));
      }
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function updateFile(fileId, data) {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.put(`/files/${fileId}`, data);
      if (res.data) {
        dispatch(setFile(res.data));
        dispatch(setMessage("File record updated successfully"));
      }
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function addMailToFile(fileId, mailId) {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.put(`/files/${fileId}/fileup/${mailId}`);
      if (res.data) {
        dispatch(setFile(res.data));
        dispatch(setMessage("Document added to file successfully"));
      }
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function removeMailFromFile(fileId, mailId) {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.delete(
        `/files/${fileId}/remove/${mailId}`
      );
      if (res.data) {
        dispatch(setFile(res.data));
        dispatch(setMessage("Document removed from file successfully"));
      }
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function requestFile(user_id, file_id) {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.put(
        `/filemovement/${user_id}/requestfile/${file_id}`
      );
      if (res.data) {
        dispatch(setMessage(res.data));
      }
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function chargeFile(user_id, file_id, charge) {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.put(
        `/filemovement/${user_id}/requestfile/${file_id}`,
        charge
      );
      if (res.data) {
        dispatch(setMessage(res.data));
      }
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function returnFile(user_id, file_id) {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.put(
        `/filemovement/${user_id}/returnFile/${file_id}`
      );
      if (res.data) {
        dispatch(setMessage(res.data));
      }
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function trashFile(fileId) {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.delete(`/files/trash/${fileId}`);
      if (res.data) {
        dispatch(setMessage(res.data));
      }
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function restoreFile(fileId) {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.delete(`/files/restore/${fileId}`);
      if (res.data) {
        dispatch(setMessage(res.data));
      }
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function deleteFile(fileId) {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.delete(`/files/delete/${fileId}`);
      if (res.data) {
        dispatch(setMessage(res.data));
      }
    } catch (error) {
      dispatch(setError(error));
    }
  };
}
