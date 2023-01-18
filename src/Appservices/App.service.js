import Axios from "axios";
import {API_MEMBER1, API_MEMBER2, API_MEMBER3, API_MEMBER4, API_ALLMEMBERS, IMG_POST, API_TEST} from "./API_URL";
import authHeader from "./auth-header";

const create_MEMBER1 = (title, description, image, url, købt) => {
  return Axios.post(`${API_MEMBER1}`,{ title, description, image, url, købt } , {
    headers: authHeader(),
  });
};

const create_MEMBER2 = (title, description, image, url, købt) => {
  return Axios.post(`${API_MEMBER2}`, { title, description, image, url, købt }, {
    headers: authHeader(),
  });
};

const create_MEMBER3 = (title, description, image, url, købt) => {
  return Axios.post(`${API_MEMBER3}`, { title, description, image, url, købt }, {
    headers: authHeader(),
  });
};

const create_MEMBER4 = (title, description, image, url, købt) => {
  return Axios.post(`${API_MEMBER4}`, { title, description, image, url, købt }, {
    headers: authHeader(),
  });
};

const create_ALLMEMBERS = (title, description, image, url, købt) => {
  return Axios.post(`${API_ALLMEMBERS}`,{ title, description, image, url, købt } , {
    headers: authHeader(),
  });
};

const create_TEST = (title, description, image, url, købt) => {
  return Axios.post(`${API_TEST}`,{ title, description, image, url, købt } , {
    headers: authHeader(),
  });
};

const update_MEMBER1 = (title, description, image, url, købt, id) => {
  return Axios.put(`${API_MEMBER1}`, { title, description, image, url, købt, id}, {
    headers: authHeader(),
  });
};

const update_MEMBER2 = (title, description, image, url) => {
  return Axios.put(`${API_MEMBER2}`, { title, description, image, url}, {
    headers: authHeader(),
  });
};

const update_MEMBER3 = (title, description, image, url) => {
  return Axios.put(`${API_MEMBER3}`, { title, description, image, url}, {
    headers: authHeader(),
  });
};

const update_MEMBER4 = (title, description, image, url) => {
  return Axios.put(`${API_MEMBER4}`, { title, description, image, url}, {
    headers: authHeader(),
  });
};

const update_ALLMEMBERS = (title, description, image, url, købt, id) => {
  return Axios.put(`${API_ALLMEMBERS}`, { title, description, image, url, købt, id}, {
    headers: authHeader(),
  });
};

const update_TEST = (title, description, image, url, købt, id) => {
  return Axios.put(`${API_TEST}`, { title, description, image, url, købt, id}, {
    headers: authHeader(),
  });
};

const login = async (username, password) => {
  return await Axios.post(`${API_ALLMEMBERS}`, { username, password });
};

const post_IMAGE = (image) => {
  return Axios.post(`${IMG_POST}`, {image})
}


const appService = {
  create_MEMBER1,
  create_MEMBER2,
  create_MEMBER3,
  create_MEMBER4,
  create_ALLMEMBERS,
  create_TEST,
  update_MEMBER1,
  update_MEMBER2,
  update_MEMBER3,
  update_MEMBER4,
  update_ALLMEMBERS,
  update_TEST,
  login,
  post_IMAGE
};

export default appService;
