import axios from "axios";

const API = axios.create({ baseURL: 'https://memories-api-server-v1.herokuapp.com/'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req;
})

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost)
export const updatePost = (id, updatedPost) => API.patch(`posts/${id}`, updatedPost, {
    headers: {"Access-Control-Allow-Origin": "*"}
});
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData, {
    headers: {"Access-Control-Allow-Origin": "*"}
});
export const signUp = (formData) => API.post('/user/signup', formData);
