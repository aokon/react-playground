import axios from "axios";

export const FETCH_POSTS = 'FETCH_POSTS';

export const FETCH_POST = 'FETCH_POST';

export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = "http://localhost:3000/v1";

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts`, { post: props })

  return {
    type: CREATE_POST,
    payload: request
  };
}
