import axios from 'axios';
import authHeader from './authHeader';
const API_URL = "http://localhost:5000/api/test/";
 /*'https://protected-wildwood-15719.herokuapp.com/api/test/';
*/
class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }
    getUserContent(){
        return axios.get(API_URL + 'user', {headers:authHeader()});
    }
}
export default new UserService();
