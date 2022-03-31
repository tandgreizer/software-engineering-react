import axios from "axios";

const BASE_URL = "https://foundation-a4.herokuapp.com";
const TUITS_API = "https://foundation-a4.herokuapp.com/tuits";
const USERS_API = "https://foundation-a4.herokuapp.com/users";

// const BASE_URL = "http://localhost:4000";
// const TUITS_API = "http://localhost:4000/tuits";
// const USERS_API = "http://localhost:4000/users";
const api = axios.create({
  withCredentials: true
});

export const findAllTuitsLikedByUser = (userId) =>
    api.get(`${USERS_API}/${userId}/likes`)
    .then(response => response.data);

export const findAllUsersThatLikedTuit = (tid) =>
    api.get(`${TUITS_API}/${tid}/likes`)
    .then(response => response.data);

export const userLikesTuit = (uid, tid) =>
    api.put(`${USERS_API}/${uid}/likes/${tid}`)
    .then(response => response.data);