import axios from 'axios';
import config from '../config.json';

export const Get = async (url, params = {}) => {
  try {
    return await axios.get(url, {
      params,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOjJ9.-WjYzDxC5HNWggeCsorZC1RGdRqgWL23eiZ-wq5Mz-o' //sessionStorage.getItem('token')
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
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOjJ9.-WjYzDxC5HNWggeCsorZC1RGdRqgWL23eiZ-wq5Mz-o' //sessionStorage.getItem('token')
      }
    });
  } catch (error) {
    throw error;
  }
};
