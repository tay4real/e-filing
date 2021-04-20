import { fetchBackend } from ".";

const getAll = (params = "/depts") => {
  const url = params;
  return fetchBackend.get(url);
};

const get = (id) => {
  return fetchBackend.get(`/depts/${id}`);
};

const create = (data) => {
  return fetchBackend.post("/depts", data);
};

const update = (id, data) => {
  return fetchBackend.put(`/depts/${id}`, data);
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
  deleteDepartment,
  deleteAll,
  findByName,
};
