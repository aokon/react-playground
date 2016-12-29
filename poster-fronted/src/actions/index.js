import axios from "axios";

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = "http://localhost:3000/v1";

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
