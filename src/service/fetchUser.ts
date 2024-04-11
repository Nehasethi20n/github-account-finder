import axios from 'axios';
export const fetchUser = async (username: string) => {
  try {
    const res = await axios.get(`https://api.github.com/search/users?q=${username}&per_page=5`);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};