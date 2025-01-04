import { API_ENDPOINTS } from '../../config';

export const signup = async (username, email, password) => {
    const response = await fetch(API_ENDPOINTS.SIGNUP, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });
    return response.json();
};

export const signin = async (email, password) => {
    const response = await fetch(API_ENDPOINTS.SIGNIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    return response.json();
};

export const logoutUser = (navigate) => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };
