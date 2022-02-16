import axios from 'axios';
import authHeader from './authHeader';
const API_URL = 'http://localhost:'+process.env.PORT+'/api/test/';
class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }
}
export default new UserService();
