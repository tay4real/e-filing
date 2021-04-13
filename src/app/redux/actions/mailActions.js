import { fetchBackend } from "../../services";
import { mail_action_types as c } from "./constants";

export const setAllMails = (mails) => ({
  type: c.SET_ALL_MAILS,
  payload: mails,
});

export const setIncomingMails = (incoming_mails) => ({
  type: c.SET_INCOMING_MAILS,
  payload: incoming_mails,
});

export const setOutgoingMails = (outgoing_mails) => ({
  type: c.SET_OUTGOING_MAILS,
  payload: outgoing_mails,
});

export const setMailDetails = (mail) => ({
  type: c.SET_MAIL_DETAIL,
  payload: mail,
});

export const setTrashedMails = (mail) => ({
  type: c.SET_TRASHED_MAILS,
  payload: mail,
});

export const setUploadedImage = (image_path) => ({
  type: c.SET_FILEIMAGE_PATH,
  payload: image_path,
});

export const setError = (error) => ({
  type: c.SET_ERROR_OPERATION,
  payload: error,
});

export const setSuccess = (message) => ({
  type: c.setSuccess,
  payload: message,
});

export function fetchAllMails() {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.get("/mails");
      dispatch(setAllMails(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function searchAllMails(query) {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.get(`/mails?${query}`);
      dispatch(setAllMails(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function fetchIncomingMails() {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.get("/mails/incoming");
      dispatch(setIncomingMails(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function searchIncomingMails(query) {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.get(`/mails/incoming?${query}`);
      dispatch(setIncomingMails(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function fetchOutgoingMails() {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.get("/mails/outgoing");
      dispatch(setOutgoingMails(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function searchOutgoingMails(query) {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.get(`/mails/outgoing?${query}`);
      dispatch(setOutgoingMails(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function fetchTrashedMails() {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.get("/mails/trash");
      dispatch(setTrashedMails(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function fetchMailByID(mailID) {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.get(`/mails/${mailID}`);
      dispatch(setMailDetails(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function addNewMail(mail) {
  dispatch(setMessage(null));
  return async (dispatch) => {
    try {
      const res = await fetchBackend.get("/mails/add_mail", mail);
      dispatch(setMessage("Mail added sucessfully"));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function uploadMailScan(mailID, file_image) {
  dispatch(setMessage(null));
  return async (dispatch) => {
    try {
      const res = await fetchBackend.get(`/mails/${mailID}/upload`, file_image);

      dispatch(setUploadedImage(res.data));
      dispatch(setMessage("File uploaded successful"));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function downloadPDF(id) {
  window.location.replace(`${process.env.REACT_APP_API_URL}/memo/${id}/pdf`);
}

export function editMail(id, mail) {
  dispatch(setMessage(null));
  return async (dispatch) => {
    try {
      const res = await fetchBackend.put(`/mails/${id}`, mail);
      dispatch(setMessage("Mail update sucessfull"));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function trashMail(id) {
  dispatch(setMessage(null));
  return async (dispatch) => {
    try {
      const res = await fetchBackend.put(`/mails/trash/${id}`);
      dispatch(setMessage(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function restoreMail(id) {
  dispatch(setMessage(null));
  return async (dispatch) => {
    try {
      const res = await fetchBackend.put(`/mails/trash/restore/${id}`);
      dispatch(setMessage(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function deleteMail(id) {
  dispatch(setMessage(null));
  return async (dispatch) => {
    try {
      const res = await fetchBackend.put(`mails/trash/delete/:id/${id}`);
      dispatch(setMessage(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}
