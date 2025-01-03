import { API_ENDPOINTS } from '../../config';

export const fetchUpdatedUser = async (userId) => {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${API_ENDPOINTS.USERS}/${userId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      const result = await response.json();
      localStorage.setItem('user', JSON.stringify(result.data)); // Update user in local storage
      return { success: true, user: result.data };
    } else {
      return { success: false, message: response.statusText };
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
};