import axios from 'axios';
import authHeader from './authHeader';
const API_URL = 'https://protected-wildwood-15719.herokuapp.com/api/test/';
class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }
}
export default new UserService();
