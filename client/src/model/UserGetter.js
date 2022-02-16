
import axios from "axios";

const API_URL = "http://localhost:" + process.env.PORT + "/api/auth/";

class UserGetter {
    login(username, password) {
        return axios
            .post(API_URL + "signin", {
                username,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                console.log(response.data);
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new UserGetter();
