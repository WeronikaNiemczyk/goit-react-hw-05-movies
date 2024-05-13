import axios from 'axios';

const API_KEY = 'a7e1e3e4724f3c237a7f9851c1e9cd77';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const fetchTrending = async () => {
  const response = await axios.get(`trending/movie/day`, params);
  // console.log('response:', response);
  // console.log('response data:', response.data);
  // console.log('response data results:', response.data.results);
  return response.data.results;
};
export const fetchDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, params);
  const responseArray = [response.data];
  // console.log('response:', responseArray);
  // console.log('response data:', response.data);
  // console.log('response data results:', response.data.results);
  return responseArray;
};
export const fetchCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits`, params);
  const responseArray = [response.data];
  // console.log('response:', response);
  // console.log('response data:', response.data);
  // console.log('response data results:', response.data.results);
  return responseArray;
};
export const fetchReview = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews`, params);
  // console.log('response:', response);
  // console.log('response data:', response.data);
  // console.log('response data results:', response.data.results);
  return response.data.results;
};

export const fetchKeyWords = async query => {
  const response = await axios.get(`search/movie?query=${query}`, params);
  console.log('response:', response);
  console.log('response data:', response.data);
  console.log('response data results:', response.data.results);
  return response.data.results;
};
