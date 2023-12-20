import Axios from "axios";
import { api_member1, api_member2, api_member3, api_member4, api_all_members, img_post } from "./API_URL";
import authHeader from "./auth-header";

const create_member1 = (title, description, image, url, købt) => {
  return Axios.post(
    `${api_member1}`,
    { title, description, image, url, købt },
    {
      headers: authHeader(),
    }
  );
};

const create_member2 = (title, description, image, url, købt) => {
  return Axios.post(
    `${api_member2}`,
    { title, description, image, url, købt },
    {
      headers: authHeader(),
    }
  );
};

const create_member3 = (title, description, image, url, købt) => {
  return Axios.post(
    `${api_member3}`,
    { title, description, image, url, købt },
    {
      headers: authHeader(),
    }
  );
};

const create_member4 = (title, description, image, url, købt) => {
  return Axios.post(
    `${api_member4}`,
    { title, description, image, url, købt },
    {
      headers: authHeader(),
    }
  );
};

const create_all_members = (title, description, image, url, købt) => {
  return Axios.post(
    `${api_all_members}`,
    { title, description, image, url, købt },
    {
      headers: authHeader(),
    }
  );
};

const update_member1 = (id, title, description, image, url, købt) => {
  return Axios.put(
    `${api_member1}`,
    { id, title, description, image, url, købt },
    {
      headers: authHeader(),
    }
  );
};

const update_member2 = (id, title, description, image, url, købt) => {
  return Axios.put(
    `${api_member2}/${id}`,
    { id, title, description, image, url, købt },
    {
      headers: authHeader(),
    }
  );
};

const update_member3 = (id, title, description, image, url, købt) => {
  return Axios.put(
    `${api_member3}`,
    { id, title, description, image, url, købt },
    {
      headers: authHeader(),
    }
  );
};

const update_member4 = (id, title, description, image, url, købt) => {
  return Axios.put(
    `${api_member4}`,
    { id, title, description, image, url, købt },
    {
      headers: authHeader(),
    }
  );
};

const update_all_members = (id, title, description, image, url, købt) => {
  return Axios.put(
    `${api_all_members}`,
    { id, title, description, image, url, købt },
    {
      headers: authHeader(),
    }
  );
};

const login = async (username, password) => {
  return await Axios.post(`${api_all_members}`, { username, password });
};

const post_image = (formData) => {
  return Axios.post(`${img_post}`, formData, {
    headers: authHeader(),
  });
};

const appService = {
  create_member1,
  create_member2,
  create_member3,
  create_member4,
  create_all_members,
  update_member1,
  update_member2,
  update_member3,
  update_member4,
  update_all_members,
  login,
  post_image,
};

export default appService;
