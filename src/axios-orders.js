import axios from 'axios';

const instance = axios.create({
  baseURL:"https://react-burger-fe1a7.firebaseio.com/"
});

export default instance;
