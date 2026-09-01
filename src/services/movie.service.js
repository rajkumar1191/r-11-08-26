// import axios from "axios";

import api from "./api";

// const API_URL = "https://jsonplaceholder.typicode.com";

export const getMovies = () => {
  return api.get('/users');
};

export const addMovie = (movie) => {
  return api.post(`/users`, movie);
};

export const updateMovie = (id, movie) => {
  return api.put(`/users/${id}`, movie);
};

export const deleteMovie = (id) => {
  return api.delete(`/users/${id}`);
};
