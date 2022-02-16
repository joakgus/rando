import axios from 'axios';
import authHeader from './authHeader';
const API_URL = 'http://localhost:5000/api/test/';
class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }
}
export default new UserService();
