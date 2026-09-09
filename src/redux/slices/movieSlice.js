import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  loading: false,
  error: false,
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
  );

  return response.data.map(({ id, title }, index) => ({
    id,
    name: title,
    year: 2020 + (index + 1),
  }));
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovieFn: (state, action) => {
      state.movies.push(action.payload);
    },
    deleteMovieFn: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id != action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state)=>{
      state.loading = true;
      state.error = null
    }).addCase(fetchMovies.fulfilled, (state, action)=>{
      state.loading = false;
      state.movies = action.payload
    }).addCase(fetchMovies.rejected, (state, action)=>{
      state.loading = false;
      state.error = action.error.message
    })
  }
});

export const { addMovieFn, deleteMovieFn } = movieSlice.actions;

export default movieSlice.reducer;
