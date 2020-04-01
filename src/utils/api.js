import axios from 'axios';

export const Get = async (url, params = {}) => {
  try {
    return await axios.get(url, {
      params,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        token: sessionStorage.getItem('token')
      }
    });
  } catch (error) {
    throw error;
  }
};

export const Post = async (url, data = {}) => {
  try {
    return await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        token: sessionStorage.getItem('token')
      }
    });
  } catch (error) {
    throw error;
  }
};
