import fetch from 'isomorphic-fetch';

const BASE_API_URL = 'https://jsonplaceholder.typicode.com';

export function fetchPosts() {
  return fetch(`${BASE_API_URL}/posts`)
    .then((response: any) => response.json())
    .catch((err: any) => err);
}

export function fetchUsers() {
  return fetch(`${BASE_API_URL}/users`)
    .then((response: any) => response.json())
    .catch((err: any) => err);
}

export function fetchCommentsByPostId(postId: number) {
  return fetch(`${BASE_API_URL}/comments?postId=${postId}`)
    .then((response: any) => response.json())
    .catch((err: any) => err);
}

export function fetchPostById(postId: number) {
  return fetch(`${BASE_API_URL}/posts/${postId}`)
    .then((response: any) => response.json())
    .catch((err: any) => err);
}

export function fetchUserById(id: number) {
  return fetch(`${BASE_API_URL}/users/${id}`)
    .then((response: any) => response.json())
    .catch((err: any) => err);
}
