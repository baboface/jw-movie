import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "a60dbc577db5b043ebeb620d61c07b0e",
    language: "ko-kr",
  },
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  topRated: () => api.get("movie/top_rated"),
  latest: () => api.get("movie/latest"),
  upComming: () => api.get("movie/upcoming"),
  movieDetail: (id) => api.get(`movie/${id}`),
  video: (id) => api.get(`movie/${id}/videos`),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: term,
      },
    }),
  credit: (id) => api.get(`movie/${id}/credits`),
};
