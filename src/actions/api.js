import { Get, Post } from '../utils/api';
import { toast } from 'react-toastify';
import config from '../config.json';

export const sendCmd = async cmd => {
  try {
    const result = await Get(`${config.apiURL}cmd`, {
      cmd
    });

    return result.data;
  } catch (error) {
    toast.error('Error sending cmd');
  }
};

export const currencyConvert = async data => {
  try {
    const result = await Get(`${config.apiURL}currency/convert`, data);
    return result.data;
  } catch (error) {
    toast.error('Error preforming convert');
  }
};

export const currencyLoan = async data => {
  try {
    const result = await Post(`${config.apiURL}currency/loan`, data);
    return result.data;
  } catch (error) {
    toast.error('Error preforming loan');
  }
};
