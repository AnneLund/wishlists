import Axios from "axios";
import {API, API_URL, API_ANNE, API_MIKKEL, API_REBECCA, API_VALDEMAR, API_USERS} from "./API_URL";
import authHeader from "./auth-header";

const getAll = (id) => {
  return Axios.get(`${API_ANNE}/${id}`, {
    /** Checks if users logged in, in case it is nessecery */
    headers: authHeader(),
  });
};

const get = (id) => {
  /** appservice.get("artist", 25) */
  return Axios.get(`${API}/${id}`, {
    headers: authHeader(),
  });
};

const create_ANNE = (titel, description, image, url, købt) => {
  return Axios.post(`${API_ANNE}`,{ titel, description, image, url, købt } , {
    headers: authHeader(),
  });
};

const login = async (username, password) => {
  return await Axios.post('http://localhost:3000/api/users', { username, password });
};

const create_MIKKEL = (titel, description, image, url, købt) => {
  return Axios.post(`${API_MIKKEL}`, { titel, description, image, url, købt }, {
    headers: authHeader(),
  });
};

const create_REBECCA = (titel, description, image, url, købt) => {
  return Axios.post(`${API_REBECCA}`, { titel, description, image, url, købt }, {
    headers: authHeader(),
  });
};

const create_VALDEMAR = (titel, description, image, url, købt) => {
  return Axios.post(`${API_VALDEMAR}`, { titel, description, image, url, købt }, {
    headers: authHeader(),
  });
};

// const login = async (username, password) => {
//   return await Axios.post(`https://next-database.vercel.app/api/users`, { username, password }, {
//     headers: authHeader()
//   });
// };

const logout = async () => {
  return await Axios.post(`${API_URL}/logout`, {
    headers: authHeader(),
  });
};

const update_ANNE = (titel, description, image, url, købt, id) => {
  return Axios.put(`${API_ANNE}`, { titel, description, image, url, købt, id}, {
    headers: authHeader(),
  });
};

const update_MIKKEL = (titel, description, image, url) => {
  return Axios.put(`${API_MIKKEL}`, { titel, description, image, url}, {
    headers: authHeader(),
  });
};

const remove = (id) => {
  return Axios.remove(`${API_ANNE}`, {id}, {
    headers: authHeader(),
  });
};

const appService = {
  getAll,
  get,
  create_ANNE,
  create_MIKKEL,
  create_REBECCA,
  create_VALDEMAR,
  update_ANNE,
  update_MIKKEL,
  remove,
  login,
  logout
};

export default appService;
