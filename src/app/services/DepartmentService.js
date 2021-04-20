import { fetchBackend } from ".";

const getAll = () => {
  return fetchBackend.get("/depts");
};

const get = (id) => {
  return fetchBackend.get(`/depts/${id}`);
};

const create = (data) => {
  return fetchBackend.post("/depts/add/new", data);
};

const update = (id, data) => {
  return fetchBackend.put(`/depts/${id}`, data);
};

const remove = (id) => {
  return fetchBackend.put(`/depts/trash/${id}`);
};

const restore = (id) => {
  return fetchBackend.put(`/depts/restore/${id}`);
};

const deleteDepartment = (id) => {
  return fetchBackend.delete(`/depts/delete/${id}`);
};

const deleteAll = () => {
  return fetchBackend.delete(`/depts`);
};

const findByName = (name) => {
  return fetchBackend.get(`/depts?name=${name}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  deleteDepartment,
  deleteAll,
  findByName,
};
