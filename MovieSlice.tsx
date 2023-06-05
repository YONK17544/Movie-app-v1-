import { createSlice } from "@reduxjs/toolkit";
import MovieInterface from "./interface/global.interface";

const initialState: MovieInterface = {
  movies: [],
  oriMovies: [],
  filter: "",
  page: 1,
};

const MovieSlice: any = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    setMovies: (state: any, action: any) => {
      state.movies = action.payload;
      state.oriMovies = action.payload;
    },
  },
});

export default MovieSlice.reducer;
export const { setMovies} = MovieSlice.actions;
