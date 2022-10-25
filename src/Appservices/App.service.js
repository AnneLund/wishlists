import Axios from "axios";
import {API_URL, API_ANNE, API_MIKKEL, API_REBECCA, API_VALDEMAR} from "./API_URL";
import authHeader from "./auth-header";

const getAll = (e) => {
  return Axios.get(`${API_URL}/${e}`, {
    /** Checks if users logged in, in case it is nessecery */
    headers: authHeader(),
  });
};

const get = (e, id) => {
  /** appservice.get("artist", 25) */
  return Axios.get(`${API_URL}/${e}/${id}`, {
    headers: authHeader(),
  });
};

const create_ANNE = (titel, description, image, url, købt) => {
  return Axios.post(`${API_ANNE}`,{ titel, description, image, url, købt } , {
    headers: authHeader(),
  });
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

const login = async (username, password) => {
  return await Axios.post(`https://next-database.vercel.app/api/users`, { username, password }, {
    headers: authHeader(),
  });
};

const logout = async () => {
  return await Axios.post(`${API_URL}/logout`, {
    headers: authHeader(),
  });
};

const update = (e, id, data) => {
  return Axios.put(`${API_URL}/${e}/${id}`, data, {
    headers: authHeader(),
  });
};

const remove = (e, id) => {
  /** remove ( "artist" , 23) */
  return Axios.delete(`${API_URL}/${e}/${id}`, {
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
  update,
  remove,
  login,
  logout
};

export default appService;
