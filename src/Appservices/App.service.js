import Axios from "axios";

import {
  api_create_user,
  api_member1,
  api_member2,
  api_member3,
  api_member4,
  api_all_members,
  api_other_members,
  img_post,
  login_url,
} from "./api_urls";
import authHeader from "./auth-header";

const create_user = (username, password) => {
  return Axios.post(
    `${api_create_user}`,
    { username, password },
    {
      headers: authHeader(),
    }
  );
};

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

const create_other_members = (title, description, image, url, købt) => {
  return Axios.post(
    `${api_other_members}`,
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

const update_other_members = (id, title, description, image, url, købt) => {
  return Axios.put(
    `${api_other_members}`,
    { id, title, description, image, url, købt },
    {
      headers: authHeader(),
    }
  );
};

const login = async (username, password) => {
  return await Axios.post(login_url, { username, password });
};

const post_image = (formData) => {
  return Axios.post(`${img_post}`, formData, {
    headers: authHeader(),
  });
};

const appService = {
  create_user,
  create_member1,
  create_member2,
  create_member3,
  create_member4,
  create_all_members,
  create_other_members,
  update_member1,
  update_member2,
  update_member3,
  update_member4,
  update_all_members,
  update_other_members,
  login,
  post_image,
};

export default appService;
