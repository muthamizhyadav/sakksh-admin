// src/utils/axiosErrorHelper.js
import axios from 'axios';

export const parseAxiosError = (err) => {
  if (axios.isAxiosError(err)) {
    if (err.response) {
      return {
        ok: false,
        kind: 'api',
        status: err.response.status,
        data: err.response.data,
      };    
    }
    if (err.request) {
      return {
        ok: false,
        kind: 'network',
        message: 'No response from server. Please check your connection.',
        raw: err.request,
      };
    }
  }

  return {
    ok: false,
    kind: 'general',
    message: err.message || 'Something went wrong',
  };
};
